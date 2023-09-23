import styles from './shop.module.scss';
import { useTranslation } from '../../app/i18n/client';

interface Props {
  lng: string;
}

const Shop: React.FC<Props> = (props) => {
  const { lng } = props;
  const { t } = useTranslation(lng, 'shop');

  return (
    <div className={styles.container}>
      <h1>{t('title')}</h1>
      <h2>{t('sub')}</h2>
    </div>
  );
};

export default Shop;
