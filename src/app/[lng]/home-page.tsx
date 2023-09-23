'use client';

import AllCountries from '@/old_components/destinations/countries/all-countries';
import FeaturedDestinations from '@/old_components/destinations/featured-destinations';
import Hero from '@/old_components/home-page/hero';
import VideoOpening from '@/old_components/home-page/video-opening';
import { post, country } from '@/utils/types';

interface Props {
  featuredPosts: post[];
  countries: country[];
  lng: string;
}

const HomePage: React.FC<Props> = ({ featuredPosts, countries, lng }) => {
  return (
    <>
      <VideoOpening />
      <Hero lng={lng} />
      <AllCountries countries={countries} lng={lng} />
      <FeaturedDestinations destinations={featuredPosts} lng={lng} />
    </>
  );
};

export default HomePage;
