import { getCountryFileNames, getFileNamesPerCountry } from '@/utils/data-utils';
import { MetadataRoute } from 'next';

type destinationsPerCountry = {
  countryName: string;
  destinations: string[];
};

const BASE_URL = 'https://sinfronteras-travelblog.com';

function generateSiteMap(allDestinations: destinationsPerCountry[]) {
  return [
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    } as const,
    {
      url: `${BASE_URL}/en/destinations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    } as const,
    {
      url: `${BASE_URL}/en/shop`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    } as const,
    {
      url: `${BASE_URL}/en/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    } as const,
    {
      url: `${BASE_URL}/es`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    } as const,
    {
      url: `${BASE_URL}/es/destinations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    } as const,
    {
      url: `${BASE_URL}/es/shop`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    } as const,
    {
      url: `${BASE_URL}/es/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    } as const,
    ...allDestinations.flatMap(({ countryName }) => {
      return [
        {
          url: `${BASE_URL}/en/destinations/${countryName}`,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        } as const,
        {
          url: `${BASE_URL}/es/destinations/${countryName}`,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        } as const,
      ];
    }),
    ...allDestinations.flatMap(({ countryName, destinations }) => {
      return [
        {
          url: `${BASE_URL}/en/destinations/${countryName}`,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        } as const,
        {
          url: `${BASE_URL}/es/destinations/${countryName}`,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        } as const,
        ...destinations.flatMap((destination) => {
          return [
            {
              url: `${BASE_URL}/en/destinations/${countryName}/${destination}`,
              lastModified: new Date(),
              changeFrequency: 'yearly',
              priority: 1,
            } as const,
            {
              url: `${BASE_URL}/es/destinations/${countryName}/${destination}`,
              lastModified: new Date(),
              changeFrequency: 'yearly',
              priority: 1,
            } as const,
          ];
        }),
      ];
    }),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const countries = getCountryFileNames('en');
  const destinations = countries.map((country) => ({
    countryName: country.replace(/\.md$/, ''),
    destinations: getFileNamesPerCountry(country.replace(/\.md$/, ''), 'en').map((fileName) => fileName.replace(/\.md$/, '')),
  }));

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(destinations);
  return sitemap;
}
