import { connectDatabase, getAllDocuments } from '@/utils/mongodb-utils';
import Comments from './comments';

interface Props {
  destinationSlug: string;
  countrySlug: string;
  lng: string;
}

const getComments = async (countrySlug: string, destinationSlug: string) => {
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
};

const CommentsContainer: React.FC<Props> = async (props) => {
  const { destinationSlug, countrySlug, lng } = props;
  const comments = await getComments(countrySlug, destinationSlug);

  return <Comments destinationSlug={destinationSlug} countrySlug={countrySlug} lng={lng} initialComments={comments} />;
};

export default CommentsContainer;
