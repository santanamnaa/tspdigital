import type { Metadata } from 'next';
import ContactContent from './contact-content';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Ready to build your unfair advantage? Schedule a strategic call with the TSP Digital team to discuss your project and discover how we can accelerate your growth.",
};

export default function ContactPage() {
  return <ContactContent />;
} 