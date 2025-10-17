import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { AppShell } from "@/components/shell/AppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Portafolio de Producto",
    template: "%s | Portafolio de Producto"
  },
  description:
    "Portafolio personal moderno creado con Next.js 15, mostrando proyectos, experiencia y formulario de contacto.",
  metadataBase: new URL("https://portfolio.example.com"),
  openGraph: {
    title: "Portafolio de Producto",
    description:
      "Portafolio personal moderno creado con Next.js 15, mostrando proyectos destacados, experiencia profesional y formas de contacto.",
    url: "https://portfolio.example.com",
    siteName: "Portafolio de Producto",
    locale: "es_ES",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
