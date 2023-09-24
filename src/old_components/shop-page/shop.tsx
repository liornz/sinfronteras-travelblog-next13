import styles from './shop.module.scss';
import { useTranslation } from '../../app/i18n';

interface Props {
  lng: string;
}

const Shop: React.FC<Props> = async (props) => {
  const { lng } = props;
  const { t } = await useTranslation(lng, 'shop');

  return (
    <div className={styles.container}>
      <h1>{t('title')}</h1>
      <h2>{t('sub')}</h2>
    </div>
  );
};

export default Shop;
