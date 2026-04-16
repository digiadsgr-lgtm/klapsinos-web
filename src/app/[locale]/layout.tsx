import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

export const viewport: Viewport = {
  themeColor: '#0A3D62',
};

export const metadata: Metadata = {
  title: 'Dr. Nikos Klapsinos | Cardiologist',
  description: 'Advanced Cardiology Care in Rethymno, Crete',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Klapsinos',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col relative">
        <NextIntlClientProvider messages={messages}>
          <Navigation locale={locale} />
          {children}
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
