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
  metadataBase: new URL("https://alnibras.pk"),
  title: {
    default: "Al Nibras Group — Pakistan's School-to-Business Ecosystem",
    template: "%s | Al Nibras Group",
  },
  description: "Al Nibras Group builds Pakistan's first self-sustaining education-finance loop — connecting Mustafai School System, Al Nibras Finance App, and real business ventures.",
  keywords: ["Al Nibras Group", "Mustafai School System", "Social Enterprise Pakistan", "Education Finance Loop", "Lahore Business Tech Pipeline", "Student Operators Program"],
  authors: [{ name: "Faizan Gillani" }],
  creator: "Faizan Gillani",
  publisher: "Al Nibras Group",
  alternates: {
    canonical: "https://alnibras.pk/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alnibras.pk/",
    title: "Al Nibras Group — Pakistan's School-to-Business Ecosystem",
    description: "Al Nibras Group builds Pakistan's first self-sustaining education-finance loop — connecting Mustafai School System, Al Nibras Finance App, and real business ventures.",
    siteName: "Al Nibras Group",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
    creator: "@alnibrasgroup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 1. Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://alnibras.pk/#organization",
    "name": "Al Nibras Group",
    "url": "https://alnibras.pk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://alnibras.pk/logo.new.jpg"
    },
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
      "https://www.linkedin.com/in/alnibrasgroup/",
      "https://www.facebook.com/alnibrasorg",
      "https://x.com/AlNibrasGroup",
      "https://www.instagram.com/alnibrasgroup"
    ]
  };

  // 2. NGO Schema
  const ngoSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": "https://alnibras.pk/#ngo",
    "name": "Al Nibras Group",
    "url": "https://alnibras.pk",
    "logo": "https://alnibras.pk/logo.new.jpg",
    "description": "Pakistan's first school-to-business social enterprise ecosystem connecting Mustafai School System, Al Nibras Finance App, and Student Operators Program.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    }
  };

  // 3. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://alnibras.pk/#website",
    "name": "Al Nibras Group",
    "url": "https://alnibras.pk",
    "description": "Pakistan's flagship self-sustaining school-to-business micro-economic infrastructure loops.",
    "publisher": {
      "@id": "https://alnibras.pk/#organization"
    }
  };

  // 4. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://alnibras.pk/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Al Nibras Group?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Al Nibras Group is Pakistan's first school-to-business social enterprise ecosystem. We break the cycle of charity dependency by connecting education (Mustafai Schools), finance (Halal micro-savings app), and enterprise (Student Operators Program) into a self-sustaining revenue loop."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Al Nibras ecosystem work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ecosystem operates in 4 stages: 1) Mustafai Schools provide premium education and digital literacy, 2) Students use our Halal Finance App for micro-savings, 3) Student Operators Program deploys youth into technical execution fields, 4) Generated revenue funds and expands the school system."
        }
      },
      {
        "@type": "Question",
        "name": "Is Al Nibras Finance App Shariah compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Al Nibras Finance is a gamified, Shariah-compliant micro-savings and digital asset management platform designed specifically for Pakistani youth development."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Al Nibras Group based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Al Nibras Group is a registered social enterprise based in Lahore, Punjab, Pakistan."
        }
      },
      {
        "@type": "Question",
        "name": "How can I partner with or donate to Al Nibras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can partner with us through our enterprise programs, sponsor a student, or invest in our ecosystem. Contact us via the website form or email info@alnibras.pk."
        }
      }
    ]
  };

  // 5. HowTo Schema
  const howtoSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://alnibras.pk/#howto",
    "name": "How the Al Nibras School-to-Business Ecosystem Works",
    "description": "Step-by-step process of connecting education and enterprise in Pakistan.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "School Stage",
        "text": "Mustafai School System delivers premium basic education and modern tech orientation."
      },
      {
        "@type": "HowToStep",
        "name": "Finance Stage",
        "text": "Kids interact with our Halal banking app to master digital micro-savings and economics."
      },
      {
        "@type": "HowToStep",
        "name": "Business Stage",
        "text": "Student Operators Program deploys them into active technical execution fields."
      },
      {
        "@type": "HowToStep",
        "name": "Revenue Stage",
        "text": "Generated enterprise revenue directly funds and expands the school ecosystem."
      }
    ]
  };

  // 6. WebPage Schema
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://alnibras.pk/#webpage",
    "url": "https://alnibras.pk",
    "name": "Al Nibras Group — Pakistan's School-to-Business Ecosystem",
    "description": "Al Nibras Group builds Pakistan's first self-sustaining education-finance loop — connecting Mustafai School System, Al Nibras Finance App, and real business ventures.",
    "isPartOf": {
      "@id": "https://alnibras.pk/#website"
    },
    "about": {
      "@id": "https://alnibras.pk/#organization"
    }
  };

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore" />
        <meta name="geo.position" content="31.5204;74.3587" />
        <meta name="ICBM" content="31.5204, 74.3587" />
        <meta name="theme-color" content="#111111" />
        <meta name="msapplication-TileColor" content="#111111" />
        <link rel="canonical" href="https://alnibras.pk/" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        {/* Google Analytics Placeholder */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ngoSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-primary-dark text-text-light font-body">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <I18nProvider>
          <ThemeProvider>
            <Navbar />
            <main id="main-content" className="flex-grow">
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
