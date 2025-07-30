import type { Metadata } from 'next';
import ProjectsContent from './projects-content';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies',
  description: "Evidence of Execution. Explore our portfolio of successful projects, from AI systems for national agencies like BRIN to full-stack platforms for growing businesses.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
} 