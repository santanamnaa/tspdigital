import type { Metadata } from 'next';
import ServicesContent from './services-content';

export const metadata: Metadata = {
  title: 'Strategic Services',
  description: "Explore our arsenal of services: Strategic Blueprints, Full-Stack Development, and AI & ML Integration. We provide end-to-end solutions to solve your most complex business challenges.",
};

export default function ServicesPage() {
  return <ServicesContent />;
} 