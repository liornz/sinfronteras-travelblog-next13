import NewComment from './new-comment';
import CommentList from './comments-list';
import styles from './comments.module.scss';
import { useTranslation } from '../../app/i18n';
import { connectDatabase, getAllDocuments } from '@/utils/mongodb-utils';

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

const Comments: React.FC<Props> = async (props) => {
  const { destinationSlug, countrySlug, lng } = props;
  const { t } = await useTranslation(lng, 'comments');
  const comments = await getComments(countrySlug, destinationSlug);

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <h3 className={styles.title}>{t('title')}</h3>
        <NewComment lng={lng} countrySlug={countrySlug} destinationSlug={destinationSlug} />
        <CommentList lng={lng} comments={comments} />
      </div>
    </div>
  );
};

export default Comments;
