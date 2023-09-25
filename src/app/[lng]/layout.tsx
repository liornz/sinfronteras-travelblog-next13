import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

import '../../../styles/globals.scss';
import MainHeader from '@/old_components/layout/main-header';
import Footer from '@/old_components/footer/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Sin Fronteras - Video Travel Blog',
  description:
    'An Inspiring Video Travel Blog. I would like to inspire you and share with you my passion for culture and people from all over the world',
  verification: {
    google: 'l0w2h2JQOHdnGVdvB0UqUOHAon8XxS24IlkTFJOqXN0',
  },
  metadataBase: new URL('https://sinfronteras-travelblog.com/'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    minimumScale: 1,
  },
  themeColor: '#000000',
  formatDetection: {
    telephone: false,
  },
  // manifest: '/manifest.json',
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { lng: string };
};

export default function RootLayout({ children, params: { lng } }: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={lato.className}>
        <MainHeader lng={lng} />
        <main style={{ marginTop: '5rem' }}>{children}</main>
        <Footer lng={lng} />
        <ToastContainer />
      </body>
    </html>
  );
}
