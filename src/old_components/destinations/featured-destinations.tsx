import { useTranslation } from '../../app/i18n';
import DestinationsGrid from '../destinations/destinations-grid';
import styles from './featured-destinations.module.scss';
import { post } from '../../utils/types';

interface Props {
  destinations: post[];
  lng: string;
}

const FeaturedDestinations: React.FC<Props> = async ({ destinations, lng }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <>
      <div className={styles.container}>
        <h1 className="header">{t('featured')}</h1>
        <div className="header-underline"></div>
        <div className={styles.divider}></div>
      </div>
      <DestinationsGrid destinations={destinations} />
    </>
  );
};

export default FeaturedDestinations;
