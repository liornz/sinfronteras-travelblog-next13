import AllCountries from '@/old_components/destinations/countries/all-countries';
import FeaturedDestinations from '@/old_components/destinations/featured-destinations';
import Hero from '@/old_components/home-page/hero';
import VideoOpening from '@/old_components/home-page/video-opening';
import { getAllCountriesData, getFeaturedDestinations } from '@/utils/data-utils';
import { languages } from '../i18n/settings';

interface Props {
  params: Promise<{ lng: string }>;
}

export default async function Page({ params }: Props) {
  const { lng } = await params;
  const featuredPosts = getFeaturedDestinations(lng);
  const countries = getAllCountriesData(lng);

  return (
    <>
      <VideoOpening />
      <Hero lng={lng} />
      <AllCountries countries={countries} lng={lng} />
      <FeaturedDestinations destinations={featuredPosts} lng={lng} />
    </>
  );
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
