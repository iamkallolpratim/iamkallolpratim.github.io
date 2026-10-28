import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://iamkallolpratim.github.io"),
  title: "Kallol Pratim Saikia — Engineering Leader @ ThoughtWorks",
  description:
    "Engineering leader and software architect with 11 years of experience building AI-native systems. Currently at ThoughtWorks.",
  icons: { icon: "/img/favicon.png" },
  openGraph: {
    title: "Kallol Pratim Saikia",
    description: "Engineering leader & software architect · 11 years · ThoughtWorks",
    url: "https://iamkallolpratim.github.io/",
    images: ["/img/dp.jpg"],
    type: "website",
  },
  twitter: { card: "summary", creator: "@KallolPratim" },
};

export const viewport: Viewport = { themeColor: "#05060a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
