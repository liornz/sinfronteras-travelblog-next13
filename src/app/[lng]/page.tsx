import Link from 'next/link';
import HomePage from './home-page';
import { getFeaturedDestinations, getAllCountriesData } from '@/utils/data-utils';
import { post } from '@/utils/types';

export default function Page({ params: { lng } }: { params: { lng: string } }) {
  const featuredPosts = getFeaturedDestinations(lng);
  const countries = getAllCountriesData(lng);
  return <HomePage countries={countries} featuredPosts={featuredPosts as post[]} lng={lng} />;
}
