import type { Metadata } from "next";
import { Poppins, Montserrat, Outfit, Manrope } from "next/font/google";
import "./globals.css";
import AOSProvider from "./AosProvider";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistManrope = Manrope({
  variable: "--font-geist-manrope",
  subsets: ["latin"],
});

const geistPoppins = Poppins({
  variable: "--font-geist-nav",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Desarrollo web | EG Sitios",
  description:
    "Desarrollo web profesional para negocios y emprendedores. Creamos sitios modernos, rápidos y optimizados para convertir visitas en clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistPoppins.variable} ${geistManrope.variable} antialiased`}
      >
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
