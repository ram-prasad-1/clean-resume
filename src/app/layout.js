import '@/css/tailwind.css';
import '@/css/custom.css';
import React from 'react';
import {Analytics} from '@vercel/analytics/react';
import {ThemeProviders} from '@/app/theme-providers';
import SectionContainer from '@/components/SectionContainer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Inter} from 'next/font/google';
import cx from 'clsx';

export const metadata = {
  title: 'Clean Resume',
  description: 'Resume',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// NOTES:
// Use /static/... not static/... for assets.
export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning added to handle a warning because of next-themes
    // https://github.com/pacocoursey/next-themes#with-app
    <html lang="en" suppressHydrationWarning>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicons/nachos.svg"
      />
      <link rel="icon" sizes="32x32" href="/static/favicons/nachos.svg" />
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  type="image/png"*/}
      {/*  sizes="16x16"*/}
      {/*  href="/static/favicons/favicon-16x16.png"*/}
      {/*/>*/}
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#abb581" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      {/*<link rel="alternate" type="application/rss+xml" href="/feed.xml" />*/}
      <body
        className={cx(
          'text-black antialiased dark:bg-[#18] dark:text-[#E6E6E6]',
          `${inter.variable} font-sans`,
        )}
        suppressHydrationWarning
      >
        <ThemeProviders>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between">
              <Header />
              <main className="mb-auto">{children}</main>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
        <Analytics />
      </body>
    </html>
  );
}
