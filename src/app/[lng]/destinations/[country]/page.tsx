import { Metadata } from 'next';
import AllDestinations from '../../../../old_components/destinations/all-destinations';
import { getCountryFileData, getCountryFileNames, getDestinationsPerCountry } from '../../../../utils/data-utils';

interface Props {
  params: Promise<{ lng: string; country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, lng } = await params;
  const countryData = getCountryFileData(country, lng);

  return {
    title: `Sinfronteras - Destinations in ${countryData.name}`,
    description: `Sinfronteras Travel Blog - Destinations in ${countryData.name}`,
  };
}

const DestinationsPerCountry: React.FC<Props> = async ({ params }) => {
  const { lng, country } = await params;
  const countryData = getCountryFileData(country, lng);
  const destinations = getDestinationsPerCountry(country, lng);
  return <AllDestinations lng={lng} destinations={destinations} country={countryData} />;
};

export default DestinationsPerCountry;

export async function generateStaticParams() {
  const countryFileNames = getCountryFileNames('en');
  const countriesArray = countryFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  const pathsEN = countriesArray.map((country) => ({ country, lng: 'en' }));
  const pathsES = countriesArray.map((country) => ({ country, lng: 'es' }));
  return [...pathsEN, ...pathsES];
}
