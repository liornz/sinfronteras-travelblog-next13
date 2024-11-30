import AllCountries from '@/old_components/destinations/countries/all-countries';
import FeaturedDestinations from '@/old_components/destinations/featured-destinations';
import Hero from '@/old_components/home-page/hero';
import VideoOpening from '@/old_components/home-page/video-opening';
import { getAllCountriesData, getFeaturedDestinations } from '@/utils/data-utils';

interface Props {
  params: Promise<{ lng: string }>;
}

export default async function Page({ params }: Props) {
  const lng = (await params).lng;
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
