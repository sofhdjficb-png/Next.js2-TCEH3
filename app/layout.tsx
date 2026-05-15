import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { GrainOverlay } from '@/components/GrainOverlay';
import { CLIENT_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title: CLIENT_DATA.SITE_TITLE,
  description: CLIENT_DATA.SITE_DESCRIPTION,
  keywords: CLIENT_DATA.KEYWORDS,
  authors: [{ name: CLIENT_DATA.AUTHOR }],
  openGraph: {
    title: CLIENT_DATA.SITE_TITLE,
    description: CLIENT_DATA.SITE_DESCRIPTION,
    url: CLIENT_DATA.DOMAIN,
    siteName: CLIENT_DATA.SITE_TITLE,
    images: [
      {
        url: `${CLIENT_DATA.DOMAIN}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: CLIENT_DATA.SITE_TITLE,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Geologica:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-white min-h-screen relative font-geologica selection:bg-titanium/30 selection:text-white">
        <GrainOverlay />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}