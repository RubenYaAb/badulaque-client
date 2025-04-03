import "./globals.css";
import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import Header from "../components/containers/header";

const merriweather = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Badulaque",
  description: "Tienda online Badulaque de Springfield",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es-ES">
        <body
          className={`${merriweather.className} antialiased p-2`}
        >
          <Header />
          {children}
        </body>
      </html>
  );
}
