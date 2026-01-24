import { connectDatabase, getAllDocuments } from '@/utils/mongodb-utils';
import Comments from './comments';

interface Props {
  destinationSlug: string;
  countrySlug: string;
  lng: string;
}

const getComments = async (countrySlug: string, destinationSlug: string) => {
  try {
    const client = await connectDatabase();
    const comments = await getAllDocuments(
      client,
      'comments',
      {
        countrySlug: countrySlug,
        destinationSlug: destinationSlug,
      },
      { _id: -1 }
    );
    client.close();
    return comments;
    } catch (error) {
    // Only log error if not in build environment or if it's a real error (not just network restriction during SSG)
    if (process.env.NODE_ENV !== 'production' || (error as any).code !== 'ENOTFOUND') {
      console.error('Failed to fetch comments from MongoDB:', error);
    }
    return []; // Return empty array if DB connection fails during build
  }
};

const CommentsContainer: React.FC<Props> = async (props) => {
  const { destinationSlug, countrySlug, lng } = props;
  const comments = await getComments(countrySlug, destinationSlug);

  return <Comments destinationSlug={destinationSlug} countrySlug={countrySlug} lng={lng} initialComments={comments} />;
};

export default CommentsContainer;
