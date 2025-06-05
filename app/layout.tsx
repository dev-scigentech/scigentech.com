import Script from 'next/script';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from './components/Header';
import Footer from './components/Footer';
import type React from 'react';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SciGen | Scientific Software Solutions',
  description: 'Where Science Meets Genius - Innovative software solutions for research and scientific conferences',
  openGraph: {
    title: 'SciGen | Scientific Software Solutions',
    description: 'Where Science Meets Genius - Innovative software solutions for research and scientific conferences',
    url: 'https://www.scigentech.com',
    siteName: 'SciGen',
    images: [
      {
        url: '/scigentech-site.png',
        width: 1024,
        height: 1024,
        alt: 'SciGenTech Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SciGen | Scientific Software Solutions',
    description: 'Where Science Meets Genius - Innovative software solutions for research and scientific conferences',
    images: ['/scigentech-site.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J12W0Z1MW3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J12W0Z1MW3');
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
