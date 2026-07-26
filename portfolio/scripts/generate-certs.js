import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const certsDir = path.join(__dirname, '../public/certs');
const outputFile = path.join(__dirname, '../src/data/certifications.json');

// Ensure directories exist
if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true });
}

const dataDir = path.dirname(outputFile);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Known issuers inferred from filename prefix or keywords
const KNOWN_ISSUERS = [
  { match: /^google[_-]/i, name: 'Google' },
  { match: /^coursera[_-]/i, name: 'Coursera' },
  { match: /^aws[_-]/i, name: 'Amazon Web Services' },
  { match: /^microsoft[_-]/i, name: 'Microsoft' },
  { match: /^ibm[_-]/i, name: 'IBM' },
  { match: /meta[_-]/i, name: 'Meta' },
  { match: /linkedin[_-]learning/i, name: 'LinkedIn Learning' },
  { match: /oracle/i, name: 'Oracle' },
];

const inferIssuerFromFilename = (filename) => {
  for (const { match, name } of KNOWN_ISSUERS) {
    if (match.test(filename)) return name;
  }
  return null;
};

const formatSegment = (segment) =>
  segment ? segment.replaceAll('_', ' ').trim() : '';

try {
  const files = fs.readdirSync(certsDir);
  const certifications = files
    .filter((file) => file.toLowerCase().endsWith('.pdf'))
    .map((file) => {
      // Convention: [Title_With_Underscores]-[Issuer]-[Date]-[Skills_Separated_By_Dots].pdf
      const nameWithoutExt = path.basename(file, '.pdf');
      const parts = nameWithoutExt.split('-');

      const title = formatSegment(parts[0]) || 'Certification';

      let issuer = 'Unknown';
      if (parts[1]) {
        issuer = formatSegment(parts[1]);
      } else {
        const inferred = inferIssuerFromFilename(nameWithoutExt);
        if (inferred) issuer = inferred;
      }

      const date = parts[2] ? formatSegment(parts[2]) : '';
      const skills = parts[3]
        ? parts[3]
            .split('.')
            .map((s) => formatSegment(s))
            .filter((s) => s.length > 0)
        : [];

      // Warn if no structured metadata was detected
      if (parts.length < 2 && !inferIssuerFromFilename(nameWithoutExt)) {
        console.warn(
          `[Certifications Generator] File "${file}" does not follow the [Title]-[Issuer]-[Date]-[Skills] convention. Issuer defaulted to "${issuer}".`,
        );
      }

      return {
        title,
        issuer,
        date,
        pdfFile: file,
        skills,
      };
    });

  // Sort by title for stable output
  certifications.sort((a, b) => a.title.localeCompare(b.title));

  fs.writeFileSync(outputFile, JSON.stringify(certifications, null, 2));
  console.log(
    `[Certifications Generator] Successfully generated ${certifications.length} certifications.`,
  );
} catch (err) {
  console.error('[Certifications Generator] Error generating certifications:', err);
  process.exit(1);
}
