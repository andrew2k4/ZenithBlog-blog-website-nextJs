import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Zenith blog",
  description:
    "Explore a world of knowledge and inspiration at Zenith Blog. Our diverse collection of blogs covers a wide range of topics, from technology and lifestyle to travel and health. Stay informed, entertained, and enlightened with our carefully curated content. Join the Zenith community and embark on a journey of discovery today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {children}
      <>
        <SpeedInsights />
        <Analytics />
      </>
    </html>
  );
}
