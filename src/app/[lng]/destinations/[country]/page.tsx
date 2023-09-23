import React from 'react';

import AllDestinations from '../../../../old_components/destinations/all-destinations';
import { getCountryFileData, getCountryFileNames, getDestinationsPerCountry } from '../../../../utils/data-utils';
import { Metadata } from 'next';

interface Props {
  params: { lng: string; country: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, lng } = params;
  const countryData = getCountryFileData(country, lng);

  return {
    title: `Sinfronteras - Destinations in ${countryData.name}`,
    description: `Sinfronteras Travel Blog - Destinations in ${countryData.name}`,
  };
}

const DestinationsPerCountry: React.FC<Props> = ({ params: { lng, country } }) => {
  const countryData = getCountryFileData(country, lng);
  const destinations = getDestinationsPerCountry(country, lng);
  return <AllDestinations lng={lng} destinations={destinations} country={countryData} />;
};

export default DestinationsPerCountry;

export async function generateStaticParams() {
  const countryFileNames = getCountryFileNames('en');
  const countriesArray = countryFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  return countriesArray.map((country) => ({ country }));
}
