import { getCountryFileNames, getFileData, getFileNamesPerCountry } from '../../../../../utils/data-utils';
import React, { Fragment } from 'react';

import SelectedVideo from '../../../../../old_components/single-destination-page/selected-video';
import SiteInfo from '../../../../../old_components/single-destination-page/site-info';
import Comments from '../../../../../old_components/comments/comments';
import { post } from '../../../../../utils/types';
import Head from 'next/head';
import { Metadata } from 'next';

interface Props {
  params: { lng: string; country: string; site: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, site, lng } = params;
  const siteData = getFileData(country, lng, site);

  return {
    title: siteData.title,
    description: `Sinfronteras Travel Blog - ${siteData.title}`,
  };
}

const SingleDestinationPage: React.FC<Props> = (props) => {
  const {
    params: { lng, country, site },
  } = props;

  const siteData = getFileData(country, lng, site);

  return (
    <>
      <SelectedVideo youtubeId={siteData.youtubeId} title={siteData.title} subtitle={siteData.subtitle} />
      <SiteInfo
        lng={lng}
        text={siteData.content}
        location={siteData.location}
        zoom={siteData.zoom}
        google_api={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      />
      <Comments lng={lng} destinationSlug={site} countrySlug={country} />
    </>
  );
};

export default SingleDestinationPage;

export async function generateStaticParams() {
  const countryFileNames = getCountryFileNames('en');
  const countriesArray = countryFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  const paths = [];
  for (const country of countriesArray) {
    const fileNames = getFileNamesPerCountry(country, 'en');
    const fileSlugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
    for (const file of fileSlugs) {
      paths.push({ country, site: file, lng: 'en' });
      paths.push({ country, site: file, lng: 'es' });
    }
  }
  return paths;
}
