import { getFeaturedDestinations, getAllCountriesData } from '@/utils/data-utils';
import { post } from '@/utils/types';
import AllCountries from '@/old_components/destinations/countries/all-countries';
import FeaturedDestinations from '@/old_components/destinations/featured-destinations';
import Hero from '@/old_components/home-page/hero';
import VideoOpening from '@/old_components/home-page/video-opening';

export default function Page({ params: { lng } }: { params: { lng: string } }) {
  const featuredPosts = getFeaturedDestinations(lng);
  const countries = getAllCountriesData(lng);

  return (
    <>
      <VideoOpening />
      <Hero lng={lng} />
      <AllCountries countries={countries} lng={lng} />
      <FeaturedDestinations destinations={featuredPosts as post[]} lng={lng} />
    </>
  );
}
