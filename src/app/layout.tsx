import type { Metadata } from "next";
import { B612 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const b612 = B612({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shellmates Writups Bank",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${b612.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
