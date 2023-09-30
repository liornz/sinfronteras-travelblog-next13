import 'server-only';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postMetaData, countryMetaData, post } from './types';
import { notFound } from 'next/navigation';

const enContryDataDirectory = path.join(process.cwd(), 'src', 'data', 'countries-data', 'en');
const esCountryDataDirectory = path.join(process.cwd(), 'src', 'data', 'countries-data', 'es');

export function getCountryFileNames(locale: string) {
  let dataFiles;
  switch (locale) {
    case 'en':
      try {
        dataFiles = fs.readdirSync(enContryDataDirectory);
      } catch {
        return notFound();
      }
      return dataFiles;
    case 'es':
      try {
        dataFiles = fs.readdirSync(enContryDataDirectory);
      } catch {
        return notFound();
      }
      return dataFiles;
    default:
      try {
        dataFiles = fs.readdirSync(enContryDataDirectory);
      } catch {
        return notFound();
      }
      return dataFiles;
  }
}

export function getCountryFileData(fileIdentifier: string, locale: string) {
  const countrySlug = fileIdentifier.replace(/\.md$/, '');
  let filePath;
  switch (locale) {
    case 'es-US':
      filePath = path.join(enContryDataDirectory, `${countrySlug}.md`);
      break;
    case 'es':
      filePath = path.join(esCountryDataDirectory, `${countrySlug}.md`);
      break;
    default:
      filePath = path.join(enContryDataDirectory, `${countrySlug}.md`);
  }
  let fileContent = '';
  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch {
    return notFound();
  }
  const { data, content } = matter(fileContent);

  const countryData = {
    slug: countrySlug,
    ...(data as countryMetaData),
    content,
  };
  return countryData;
}

export function getAllCountriesData(locale: string) {
  const countryFileNames = getCountryFileNames(locale);
  const allCountries = countryFileNames.map((fileName) => {
    return getCountryFileData(fileName, locale);
  });
  return allCountries;
}

export function buildCountryDirectory(country: string, locale: string) {
  const enDataDirectory = path.join(process.cwd(), 'src', 'data', 'destination-data', 'en', country);
  const esDataDirectory = path.join(process.cwd(), 'src', 'data', 'destination-data', 'es', country);
  const directory = locale === 'en' ? enDataDirectory : esDataDirectory;
  return directory;
}

export function getFileData(country: string, locale: string, fileIdentifier: string) {
  const directory = buildCountryDirectory(country, locale);
  const fileSlug = fileIdentifier.replace(/\.md$/, '');
  const filePath = path.join(directory, `${fileSlug}.md`);
  let fileContent = '';
  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch {
    return notFound();
  }
  const { data, content } = matter(fileContent);

  const postData = {
    slug: fileSlug,
    countrySlug: country,
    ...(data as postMetaData),
    content,
  };
  return postData;
}

export function getFileNamesPerCountry(country: string, locale: string) {
  const directory = buildCountryDirectory(country, locale);
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(directory);
  } catch {
    return notFound();
  }
  return fileNames;
}

export function getDestinationsPerCountry(country: string, locale: string) {
  const directory = buildCountryDirectory(country, locale);

  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(directory);
  } catch {
    return notFound();
  }
  const filesData = fileNames.map((file) => {
    return getFileData(country, locale, file);
  });
  return filesData;
}

export function getFeaturedDestinations(locale: string) {
  const countryFileNames = getCountryFileNames(locale);
  const countrySlugs = countryFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  let allDestinationData: post[] = [];
  for (const country of countrySlugs) {
    const destinations = getDestinationsPerCountry(country, locale);
    allDestinationData = allDestinationData.concat(destinations);
  }
  const featuredDestinations = allDestinationData.filter((destination) => destination.isFeatured === true);
  return featuredDestinations;
}
