import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T.S.P. Digital - We Don't Build Apps. We Build Unfair Advantages.",
  description: "T.S.P. Digital is a strategic technology partner that weaponizes your data and automates your processes using AI and intelligent software.",
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
