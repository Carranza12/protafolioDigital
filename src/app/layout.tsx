import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desarrolladores Independientes | Software & Automatización",
  description: "Desarrollo de software a la medida, MVPs, SaaS y automatizaciones con IA. Francisco Carranza y Christian Chiquito - Equipo de desarrollo experto.",
  keywords: ["Desarrollo Software", "MVP", "Automatizaciones", "IA", "SaaS", "Francisco Carranza", "Christian Chiquito"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
