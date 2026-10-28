import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://iamkallolpratim.github.io"),
  title: "Kallol Pratim Saikia — Lead Consultant @ ThoughtWorks",
  description:
    "Lead Consultant at ThoughtWorks and software architect with 11 years of experience building AI-native systems.",
  icons: { icon: "/img/favicon.png" },
  openGraph: {
    title: "Kallol Pratim Saikia",
    description: "Lead Consultant @ ThoughtWorks · Software architect · 11 years",
    url: "https://iamkallolpratim.github.io/",
    images: ["/img/dp.jpg"],
    type: "website",
  },
  twitter: { card: "summary", creator: "@KallolPratim" },
};

export const viewport: Viewport = { themeColor: "#151312" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
