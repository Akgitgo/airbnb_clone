import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { SiteShell } from '@/components/site-shell';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Airbnb Listing Clone',
  description: 'A desktop recreation of an Airbnb listing experience.',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
