import { Metadata } from 'next';
import AllCountries from '../../../old_components/destinations/countries/all-countries';
import { country } from '../../../utils/types';
import { getAllCountriesData } from '../../../utils/data-utils';
import React from 'react';

interface Props {
  params: { lng: string };
}

export const metadata: Metadata = {
  title: 'Travelblog Sinfronteras - Destinations Page',
  description: 'Destinations - Sinfronteras Travel Blog - Choose country',
};

const AllCountriesPage: React.FC<Props> = ({ params: { lng } }) => {
  const countries = getAllCountriesData(lng);
  return <AllCountries lng={lng} countries={countries} />;
};

export default AllCountriesPage;
