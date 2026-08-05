import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "../../lib/fonts";
import CustomCursor from "../../components/ui/CustomCursor";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "NetForge Digital — Web Development & Digital Marketing Agency, Dubai",
  description:
    "NetForge Digital builds high-performance websites, aggressive marketing strategies, and measurable results for ambitious businesses in Dubai & the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
