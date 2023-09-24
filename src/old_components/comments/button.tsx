import styles from './new-comment.module.scss';
import { useTranslation } from '../../app/i18n/client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

type Props = {
  lng: string;
};

export default function Button({ lng }: Props) {
  const { t } = useTranslation(lng, 'comments');
  const { pending } = useFormStatus();
  return <button className={styles.button}>{pending ? t('submitting') : t('button')}</button>;
}
