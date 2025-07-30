import type { Metadata } from 'next';
import HomeContent from './home-content';

export const metadata: Metadata = {
  title: 'AI-Powered Digital Transformation',
  description: "We don't just build apps, we build unfair advantages. TSP Digital turns your business problems into competitive dominance through AI and custom software solutions.",
  openGraph: {
    title: "AI-Powered Digital Transformation",
    description: "We don't just build apps, we build unfair advantages. TSP Digital turns your business problems into competitive dominance through AI and custom software solutions.",
    url: "/",
    siteName: "TSP Digital",
    images: [
      {
        url: "/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Digital Transformation",
    description: "We don't just build apps, we build unfair advantages. TSP Digital turns your business problems into competitive dominance through AI and custom software solutions.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
