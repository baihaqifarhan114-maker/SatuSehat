import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dashboard Operasional — Klinik Arjawinangun Sehat",
  description:
    "Sistem ERP Rekam Medis Elektronik terintegrasi SatuSehat — Dashboard operasional klinik dengan digitalisasi penuh untuk pelayanan cepat dan paperless.",
  keywords: [
    "klinik",
    "rekam medis elektronik",
    "RME",
    "SatuSehat",
    "ERP",
    "Arjawinangun",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: "12px",
              padding: "12px 16px",
            },
          }}
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
