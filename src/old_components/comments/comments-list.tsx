import { Fragment } from 'react';
import Spinner from '../../old_components/ui/spinner';
import { commentData } from '../../utils/types';
import styles from './comments-list.module.scss';
import { useTranslation } from '../../app/i18n/client';

interface Props {
  comments: commentData[];
  isLoading: boolean;
  lng: string;
}

const CommentsList: React.FC<Props> = (props) => {
  const { comments, isLoading, lng } = props;
  const { t } = useTranslation(lng, 'comments');
  function title() {
    if (isLoading) {
      return <Spinner />;
    }
    if (comments.length === 0) {
      return null;
    } else
      return (
        <p className={styles.title} role="note">
          {t('list-title')}
        </p>
      );
  }
  function commentsList() {
    if (isLoading || comments.length === 0) {
      return null;
    } else
      return (
        <ul className={styles.comments}>
          {comments.map((comment) => (
            <li key={comment._id} className={styles.comment}>
              <div>
                <p className={styles.name}>
                  <strong>{comment.name}</strong>
                </p>
                <p className={styles.email}>{comment.email}</p>
              </div>
              <p className={styles.text}>{comment.text}</p>
            </li>
          ))}
        </ul>
      );
  }

  return (
    <Fragment>
      {title()}
      {commentsList()}
    </Fragment>
  );
};

export default CommentsList;
