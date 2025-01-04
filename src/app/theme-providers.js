'use client';

import {ThemeProvider} from 'next-themes';
import siteMetadata from '@/data/siteMetadata';
import React from 'react';

export function ThemeProviders({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={'light'}
    >
      {children}
    </ThemeProvider>
  );
}
