import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeContext";
import { I18nProvider } from "@/components/I18nContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Al Nibras Group — Pakistan's School-to-Business Ecosystem",
    template: "%s | Al Nibras Group",
  },
  description: "Al Nibras Group builds Pakistan's first self-sustaining education-finance loop — connecting Mustafai School System, Al Nibras Finance App, and real business ventures.",
  keywords: ["Al Nibras Group", "Mustafai School System", "Social Enterprise Pakistan", "Education Finance Loop", "Lahore Business Tech Pipeline", "Student Operators Program"],
  authors: [{ name: "Faizan Gillani" }],
  creator: "Faizan Gillani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://al-nibras-group.com",
    title: "Al Nibras Group — Pakistan's School-to-Business Ecosystem",
    description: "Al Nibras Group builds Pakistan's first self-sustaining education-finance loop — connecting Mustafai School System, Al Nibras Finance App, and real business ventures.",
    siteName: "Al Nibras Group",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Al Nibras Group Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Nibras Group — Pakistan's School-to-Business Ecosystem",
    description: "Al Nibras Group builds Pakistan's first self-sustaining education-finance loop — connecting Mustafai School System, Al Nibras Finance App, and real business ventures.",
    images: ["https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Al Nibras Group",
    "url": "https://al-nibras-group.com",
    "logo": "https://al-nibras-group.com/logo.png",
    "description": "Al Nibras Group builds Pakistan's first self-sustaining education-finance loop — connecting Mustafai School System, Al Nibras Finance App, and real business ventures.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "founder": {
      "@type": "Person",
      "name": "Faizan Gillani"
    },
    "sameAs": [
      "https://www.linkedin.com/company/al-nibras-group",
      "https://facebook.com/alnibrasgroup"
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-primary-dark text-text-light font-body">
        <I18nProvider>
          <ThemeProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
