import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quangsang.dev"),
  title: "Nguyen Quang Sang | Software Engineer & Cloud Trainee",
  description:
    "Portfolio of Nguyen Quang Sang - Software Engineer Intern at Money Forward Vietnam, HCMUTE Software Engineering student passionate about backend microservices, cloud architecture on AWS, and scalable systems.",
  keywords: [
    "Nguyen Quang Sang",
    "Nguyễn Quang Sáng",
    "Software Engineer Intern",
    "Money Forward Vietnam",
    "Admina",
    "Backend Developer",
    "Cloud Engineer",
    "AWS",
    "HCMUTE",
    "TypeScript",
    "NestJS",
  ],
  authors: [{ name: "Nguyen Quang Sang", url: "https://github.com/sang-ute" }],
  openGraph: {
    title: "Nguyen Quang Sang | Software Engineer Portfolio",
    description:
      "Software Engineer Intern at Money Forward Vietnam | AWS Cloud Trainee | HCMUTE Software Engineering",
    url: "https://github.com/sang-ute",
    siteName: "Nguyen Quang Sang Portfolio",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 800,
        height: 800,
        alt: "Nguyen Quang Sang",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
