import { getCountryFileNames, getFileData, getFileNamesPerCountry } from '../../../../../utils/data-utils';

import CommentsContainer from '@/old_components/comments/comments-container';
import { Metadata } from 'next';
import SelectedVideo from '../../../../../old_components/single-destination-page/selected-video';
import SiteInfo from '../../../../../old_components/single-destination-page/site-info';

interface Props {
  params: Promise<{ lng: string; country: string; site: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, site, lng } = await params;
  const siteData = getFileData(country, lng, site);

  return {
    title: `Sinfronteras - ${siteData.title}`,
    description: `Sinfronteras Travel Blog - ${siteData.title}`,
  };
}

const SingleDestinationPage: React.FC<Props> = async ({ params }) => {
  const { lng, country, site } = await params;

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
      <CommentsContainer lng={lng} destinationSlug={site} countrySlug={country} />
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
