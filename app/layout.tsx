import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-config";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import BackgroundEffect from "@/components/background-effect";
import { Analytics } from "@vercel/analytics/next";
import CustomCursor from "@/components/custom-cursor";
import { CursorProvider } from "@/context/cursor-context";
import Chatbot from "@/components/chatbot";
import LenisProvider from "@/components/lenis-provider";

// Preload fonts to ensure they're available
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  preload: true,
  display: "swap",
});

const siteUrl = getSiteUrl();
const seoTitle = "Aditya Pawar | AI, Web, and ML Engineer";
const seoDescription =
  "Aditya Pawar portfolio showcasing AI engineering, full-stack web development, backend APIs, cloud deployment, and production-ready projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | Aditya Pawar",
  },
  description: seoDescription,
  applicationName: "Aditya Pawar Portfolio",
  creator: "Aditya Pawar",
  publisher: "Aditya Pawar",
  authors: [{ name: "Aditya Pawar", url: siteUrl }],
  keywords: [
    "Aditya",
    "Aditya Pawar",
    "Pawar",
    "Pawar Aditya",
    "Aditya1408",
    "Aditya developer",
    "Aditya Pawar portfolio",
    "AI engineer",
    "full stack developer",
    "cloud engineer",
    "Aditya Pawar projects",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "Aditya Pawar Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Pawar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Pawar | AI, Web, and Cloud Engineer",
    description: seoDescription,
    images: ["/profile.jpg"],
  },
  generator: "v0.dev",
  icons: {
    icon: "AP.png",
    shortcut: "AP.png",
    apple: "AP.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aditya Pawar Portfolio",
    url: siteUrl,
    inLanguage: "en-US",
    description: seoDescription,
    publisher: {
      "@type": "Person",
      name: "Aditya Pawar",
      url: siteUrl,
    },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aditya Pawar",
    alternateName: ["Pawar Aditya", "Aditya1408"],
    description: seoDescription,
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "AI, Web, and ML Engineer",
    email: "mailto:adityapawar@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    mainEntityOfPage: siteUrl,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "K. K. Wagh Institute of Engineering Education and Research, Nashik",
      },
    ],
    knowsAbout: [
      "AI Engineering",
      "LLM Applications",
      "Full-Stack Web Development",
      "Backend APIs",
      "Cloud Deployment",
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
    ],
    sameAs: [
      "https://github.com/AdityaPawar1408",
      "https://www.linkedin.com/in/aditya-pawar-21670b29a/",
      "https://leetcode.com/u/Aditya_Pawar_05/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to improve font loading performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}
        suppressHydrationWarning
      >
        <LenisProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <CursorProvider>
              <BackgroundEffect />
              <Analytics />
              {children}
              <CustomCursor />
              <Toaster />
            </CursorProvider>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
