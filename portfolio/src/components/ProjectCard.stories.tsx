import type { Meta, StoryObj } from '@storybook/react-vite';
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
    description: 'Undergraduate thesis: a static analyzer for monolithic Spring Boot codebases.',
    languages: ['Java'],
    tools: ['JavaParser', 'Spring Boot'],
    role: 'Author · thesis',
    tasks: [
      'Designed and implemented the analyzer (Java / JavaParser)',
      'Rules for architectural bad practices in Spring monoliths',
      'Runnable against real Spring Boot source trees'
    ],
  },
};

export const WithoutRepo: Story = {
  args: {
    title: 'Cargoability',
    description: 'B2B SaaS for international freight forwarding. I owned the backend and Google Cloud deployment.',
    languages: ['Java'],
    tools: ['Spring Boot', 'PostgreSQL', 'Google Cloud', 'Stripe', 'GCS'],
    role: 'Backend & cloud',
    tasks: [
      'Modeled quoting and shipments with Incoterms',
      'Domain events for email and SSE',
      'GCS signed URLs and Stripe quotas'
    ],
  },
};
