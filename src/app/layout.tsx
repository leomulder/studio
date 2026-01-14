import type { Metadata } from 'next';
import Script from 'next/script';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Paroles Claires | Étude biblique approfondie',
  description: 'Un cadre clair pour comprendre la Bible, verset par verset, sans se perdre.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <Script id="utmify-pixel-config" strategy="afterInteractive">
          {`window.pixelId = "6968210716f60bda1549eed9";`}
        </Script>
        <Script
          id="utmify-pixel-script"
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
        />
        <Script
          id="utmify-utms-script"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
