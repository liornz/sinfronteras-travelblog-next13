import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Lato } from 'next/font/google';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

import '../../../styles/globals.scss';
import Footer from '@/old_components/footer/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideDrawer from '@/old_components/layout/sideDrawer';
import { getAllCountriesData } from '@/utils/data-utils';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Sin Fronteras - Video Travel Blog',
  description:
    'An Inspiring Video Travel Blog. I would like to inspire you and share with you my passion for culture and people from all over the world',
  verification: {
    google: 'l0w2h2JQOHdnGVdvB0UqUOHAon8XxS24IlkTFJOqXN0',
  },
  metadataBase: new URL('https://sinfronteras-travelblog.com/'),
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 1,
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: { lng: string };
};

const drawerWidth = 240;

export default function RootLayout({ children, params: { lng } }: RootLayoutProps) {
  const countries = getAllCountriesData(lng);
  const countriesData = countries.map((country) => ({ name: country.name, slug: country.slug }));
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={lato.className}>
        <SideDrawer lng={lng} countriesData={countriesData} drawerWidth={drawerWidth}>
          {children}
        </SideDrawer>
        <Footer drawerWidth={drawerWidth} lng={lng} />
        <ToastContainer />
      </body>
    </html>
  );
}
