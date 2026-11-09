import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://sang-ute.github.io/portfolio-website"),
  title: "Nguyen Quang Sang — Software Engineer",
  description:
    "Software Engineer Intern at Money Forward Vietnam (MFi). Software Engineering student at HCMUTE. Backend architectures, cloud systems on AWS, and microservices built to scale.",
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
    title: "Nguyen Quang Sang — Software Engineer",
    description:
      "Software Engineer Intern at Money Forward Vietnam | Cloud & Backend Systems",
    url: "https://sang-ute.github.io/portfolio-website",
    siteName: "Nguyen Quang Sang",
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
    <html lang="en" data-theme="dark" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-white selection:text-black`}>
        <MotionConfig reducedMotion="user">
          <ThemeProvider>{children}</ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
