import type { Metadata } from "next";
import AOSProvider from "../AosProvider";
import WhatsappButton from "./components/WhatsappButton";
import { Poppins, Montserrat, Outfit, Manrope } from "next/font/google";
// @ts-ignore
import "../globals.css";

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
  title: "Webkelar Digital | Desarrollo Web",
  description:
    "Desarrollo web profesional para negocios y profesionales. Creamos sitios rápidos, modernos y sistemas a medida diseñados para convertir visitas en clientes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistPoppins.variable} ${geistManrope.variable} antialiased`}
      >
        <AOSProvider />
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
