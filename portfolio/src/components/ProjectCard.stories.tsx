import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: 'Architecture Evaluator',
    repository: 'https://github.com/Opsord/architecture-evaluator',
    description: 'A custom tool to analyze source code of monolithic Spring Boot applications using JavaParser.',
    languages: ['Java'],
    tools: ['JavaParser', 'Spring Boot'],
    role: 'FullStack Developer',
    tasks: [
      'Tool design and development',
      'Source code analysis',
      'Detection of architectural bad practices'
    ],
    complexity: 'high',
  },
};

export const WithoutRepo: Story = {
  args: {
    title: 'Scrum Master & QA Automation',
    description: 'Served as QA and Scrum Master in the development team at RosenmannLópez architecture firm.',
    languages: ['JavaScript', 'TypeScript'],
    tools: ['React', 'GitHub Actions', 'Docker', 'SonarCloud'],
    role: 'QA & Scrum Master',
    tasks: [
      'Automation of CI/CD pipelines',
      'Code quality reviews',
      'Facilitating Scrum ceremonies'
    ],
    complexity: 'medium',
  },
};
