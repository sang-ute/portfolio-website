import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://sang-ute.github.io/portfolio-website";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nguyen Quang Sang — Software Engineer | Backend & Cloud Systems",
    template: "%s | Nguyen Quang Sang",
  },
  description:
    "Software Engineer Intern at Money Forward Vietnam (MFi) and final-year student at HCMUTE. Specializing in high-throughput backend services, AWS cloud architectures, microservices (NestJS, TypeScript), and distributed systems.",
  keywords: [
    "Nguyen Quang Sang",
    "Nguyễn Quang Sáng",
    "Software Engineer",
    "Software Engineer Intern",
    "Money Forward Vietnam",
    "MFi",
    "Admina",
    "Backend Developer",
    "Cloud Engineer",
    "AWS",
    "HCMUTE",
    "TypeScript",
    "NestJS",
    "Node.js",
    "Docker",
    "Microservices",
    "MySQL",
    "Redis",
    "DynamoDB",
    "Ho Chi Minh City",
    "Vietnam Developer",
    "Software Engineering Class of 2026",
    "Class of 2027",
  ],
  authors: [{ name: "Nguyen Quang Sang", url: "https://github.com/sang-ute" }],
  creator: "Nguyen Quang Sang",
  publisher: "Nguyen Quang Sang",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Nguyen Quang Sang — Software Engineer | Backend & Cloud",
    description:
      "Software Engineer Intern at Money Forward Vietnam. Crafting scalable backend architectures, cloud systems on AWS, and high-performance microservices.",
    url: siteUrl,
    siteName: "Nguyen Quang Sang Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: `${siteUrl}/assets/profile-wide.jpg`,
        width: 1200,
        height: 630,
        alt: "Nguyen Quang Sang — Software Engineer Portfolio",
      },
      {
        url: `${siteUrl}/assets/profile-portrait.jpg`,
        width: 800,
        height: 800,
        alt: "Nguyen Quang Sang Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Quang Sang — Software Engineer",
    description:
      "Software Engineer Intern at Money Forward Vietnam. Software engineering, backend architecture, and AWS cloud systems.",
    images: [`${siteUrl}/assets/profile-wide.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Nguyen Quang Sang",
      alternateName: ["Nguyễn Quang Sáng", "Quang Sang Nguyen", "sang-ute"],
      jobTitle: "Software Engineer Intern",
      worksFor: {
        "@type": "Organization",
        name: "Money Forward Vietnam",
        url: "https://moneyforward.vn",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "HCMC University of Technology and Education (HCMUTE)",
        url: "https://hcmute.edu.vn",
      },
      url: siteUrl,
      image: `${siteUrl}/assets/profile-portrait.jpg`,
      email: "mailto:nqs28012004@gmail.com",
      telephone: "+84938963667",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh City",
        addressCountry: "Vietnam",
      },
      sameAs: [
        "https://github.com/sang-ute",
        "https://www.linkedin.com/in/sang-n-9946b6200/",
      ],
      description:
        "Software Engineer Intern at Money Forward Vietnam (MFi) specializing in backend systems, AWS cloud architectures, microservices, NestJS, and TypeScript.",
      knowsAbout: [
        "Software Engineering",
        "Backend Architecture",
        "Cloud Computing",
        "Amazon Web Services (AWS)",
        "TypeScript",
        "NestJS",
        "Docker",
        "Microservices",
        "Node.js",
        "MySQL",
        "Redis",
        "DynamoDB",
        "Distributed Systems",
      ],
      knowsLanguage: [
        {
          "@type": "Language",
          name: "Vietnamese",
          alternateName: "vi",
        },
        {
          "@type": "Language",
          name: "English",
          alternateName: "en",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Nguyen Quang Sang — Software Engineer Portfolio",
      description:
        "Official portfolio and engineering track record of Nguyen Quang Sang (Software Engineer Intern at Money Forward Vietnam).",
      author: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Nguyen Quang Sang — Profile",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-white selection:text-black`}>
        <MotionConfig reducedMotion="user">
          <ThemeProvider>{children}</ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
