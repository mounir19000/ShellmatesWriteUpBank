import type { Metadata } from "next";
import { B612 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LetterGlitch from "@/blocks/Backgrounds/LetterGlitch/LetterGlitch";

const b612 = B612({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shellmates Writeups Bank",
  description:
    "Explore detailed walkthroughs of Capture The Flag challenges from various cybersecurity competitions. Learn from expert solutions and improve your CTF skills.",
  keywords: [
    "CTF",
    "cybersecurity",
    "writeups",
    "shellmates",
    "capture the flag",
    "hacking",
    "security",
  ],
  authors: [{ name: "Shellmates Club" }],
  creator: "Shellmates Club",
  publisher: "Shellmates Club",
  openGraph: {
    title: "Shellmates Writeups Bank",
    description:
      "Explore detailed walkthroughs of Capture The Flag challenges from various cybersecurity competitions.",
    url: "https://writeups.shellmates.club",
    siteName: "Shellmates Writeups Bank",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shellmates Writeups Bank",
    description:
      "Explore detailed walkthroughs of Capture The Flag challenges from various cybersecurity competitions.",
    creator: "@shellmatesclub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${b612.className} antialiased relative`}>
        {/* Animated Letter Glitch Background */}
        <div className="fixed inset-0 z-0">
          <LetterGlitch
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            glitchSpeed={100}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
          />
        </div>

        <div id="backdrop" className="fixed inset-0 z-10"></div>

        {/* Main content with relative positioning */}
        <div className="relative z-20">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
