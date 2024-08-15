import "./globals.css";
import type { Metadata } from "next";
import { Orbit } from "next/font/google";

const orbit = Orbit({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "이유성 | want to be comedian",
  description: "My favorite thing to do is make other people laugh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbit.className} bg-gray-300 text-navy p-2`}>
        {children}
      </body>
    </html>
  );
}
