import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://tspdigital.com'),
  title: {
    template: '%s | TSP Digital',
    default: 'TSP Digital - AI & Strategic Development',
  },
  description: 'We are a strategic technology partner that weaponizes data and automates processes using AI. We build unfair advantages for ambitious businesses.',
  icons: {
    icon: '/logo/tspd.svg',
    shortcut: '/logo/tspd.svg',
    apple: '/logo/tspd.svg',
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
        {children}
      </body>
    </html>
  );
}
