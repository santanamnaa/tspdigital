import type { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Meet the architects of digital acceleration. Learn about TSP Digital's mission and the core team of strategists, AI specialists, and system architects ready to accelerate your organization.",
};

export default function AboutPage() {
  return <AboutContent />;
} 