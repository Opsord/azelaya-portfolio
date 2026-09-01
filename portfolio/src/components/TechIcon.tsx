import { Icon } from '@iconify/react';

export type TechIconName =
  | 'javascript'
  | 'typescript'
  | 'java'
  | 'python'
  | 'html5'
  | 'css3'
  | 'react'
  | 'spring'
  | 'nestjs'
  | 'docker'
  | 'kubernetes'
  | 'jenkins'
  | 'nginx'
  | 'git'
  | 'github'
  | 'postman'
  | 'postgresql'
  | 'mysql'
  | 'latex'
  | 'googlecloud'
  | 'github-dark'
  | 'linkedin'
  | 'github-light';

const COLLECTION_MAP: Record<TechIconName, string> = {
  javascript: 'devicon:javascript',
  typescript: 'devicon:typescript',
  java: 'devicon:java',
  python: 'devicon:python',
  html5: 'devicon:html5',
  css3: 'devicon:css3',
  react: 'devicon:react',
  spring: 'devicon:spring',
  nestjs: 'devicon:nestjs',
  docker: 'devicon:docker',
  kubernetes: 'devicon:kubernetes',
  jenkins: 'devicon:jenkins',
  nginx: 'devicon:nginx',
  git: 'devicon:git',
  github: 'devicon:github',
  'github-dark': 'devicon:github',
  'github-light': 'devicon:github',
  postman: 'devicon:postman',
  postgresql: 'devicon:postgresql',
  mysql: 'devicon:mysql',
  latex: 'devicon:latex',
  googlecloud: 'devicon:googlecloud',
  linkedin: 'devicon:linkedin',
};

// Some brand icons ship as two-tone (color + monochrome) variants
// in devicon. The plain names above are the colored ones.
const getIconString = (name: TechIconName): string => COLLECTION_MAP[name];

interface TechIconProps {
  name: TechIconName;
  size?: number;
  className?: string;
}

export const TechIcon = ({ name, size = 36, className = '' }: TechIconProps) => {
  return (
    <Icon
      icon={getIconString(name)}
      width={size}
      height={size}
      className={className}
    />
  );
};

interface TechBadgeProps {
  name: TechIconName;
  label: string;
  size?: number;
}

export const TechBadge = ({ name, label, size = 32 }: TechBadgeProps) => {
  return (
    <div
      className="group flex flex-col items-center justify-center gap-2 p-3 bg-surface-container border border-outline-variant/25 rounded-sm hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 transition-all duration-200"
      title={label}
    >
      <div className="transition-transform duration-200 group-hover:scale-110">
        <TechIcon name={name} size={size} />
      </div>
      <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider group-hover:text-primary transition-colors">
        {label}
      </span>
    </div>
  );
};
