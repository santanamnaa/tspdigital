import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://tspdigital.agency'),
  title: {
    template: '%s | TSP Digital',
    default: 'TSP Digital - AI & Strategic Development',
  },
  description: 'We are a strategic technology partner that accelerates operations and transforms data using AI. We build lasting value for forward-thinking organizations.',
  icons: {
    icon: '/logo/tspd.svg',
    shortcut: '/logo/tspd.svg',
    apple: '/logo/tspd.svg',
  },
  verification: {
    google: 'google510f30a9d8055108.html',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
