import { Metadata } from 'next';
import React from 'react';
import AllCountries from '../../../old_components/destinations/countries/all-countries';
import { getAllCountriesData } from '../../../utils/data-utils';

interface Props {
  params: Promise<{ lng: string }>;
}

export const metadata: Metadata = {
  title: 'Travelblog Sinfronteras - Destinations Page',
  description: 'Destinations - Sinfronteras Travel Blog - Choose country',
};

const AllCountriesPage: React.FC<Props> = async ({ params }) => {
  const lng = (await params).lng;
  const countries = getAllCountriesData(lng);
  return <AllCountries lng={lng} countries={countries} />;
};

export default AllCountriesPage;
