'use client';

import { useTranslation } from '../../app/i18n/client';
import CommentList from './comments-list';
import styles from './comments.module.scss';
import NewComment from './new-comment';

interface Props {
  destinationSlug: string;
  countrySlug: string;
  lng: string;
  initialComments: any[]; // Add proper type based on your comment structure
}

const Comments: React.FC<Props> = (props) => {
  const { destinationSlug, countrySlug, lng, initialComments } = props;
  const { t } = useTranslation(lng, 'comments');

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <h3 className={styles.title}>{t('title')}</h3>
        <NewComment lng={lng} countrySlug={countrySlug} destinationSlug={destinationSlug} />
        <CommentList lng={lng} comments={initialComments} />
      </div>
    </div>
  );
};

export default Comments;
