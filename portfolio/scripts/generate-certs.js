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

try {
  const files = fs.readdirSync(certsDir);
  const certifications = files
    .filter(file => file.endsWith('.pdf'))
    .map(file => {
      // Convention: [Title_With_Underscores]-[Issuer]-[Date]-[Skills_Separated_By_Dots].pdf
      const nameWithoutExt = path.basename(file, '.pdf');
      const parts = nameWithoutExt.split('-');

      const title = parts[0] ? parts[0].replaceAll('_', ' ') : 'Certificación';
      
      let issuer = 'Organización';
      if (parts[1]) {
        issuer = parts[1].replaceAll('_', ' ');
      } else if (file.toLowerCase().startsWith('coursera')) {
        issuer = 'Coursera';
      }

      const date = parts[2] ? parts[2].replaceAll('_', ' ') : '';
      const skills = parts[3] ? parts[3].split('.').map(s => s.replaceAll('_', ' ')) : [];

      return {
        title,
        issuer,
        date,
        pdfFile: file,
        skills
      };
    });

  // Write out the generated JSON file
  fs.writeFileSync(outputFile, JSON.stringify(certifications, null, 2));
  console.log(`[Certifications Generator] Successfully generated ${certifications.length} certifications.`);
} catch (err) {
  console.error('[Certifications Generator] Error generating certifications:', err);
}
