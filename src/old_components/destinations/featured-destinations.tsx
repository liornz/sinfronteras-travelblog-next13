'use client';

import { useTranslation } from '../../app/i18n/client';
import { post } from '../../utils/types';
import DestinationsGrid from '../destinations/destinations-grid';
import styles from './featured-destinations.module.scss';

interface Props {
  destinations: post[];
  lng: string;
}

const FeaturedDestinations: React.FC<Props> = (props) => {
  const { destinations, lng } = props;
  const { t } = useTranslation(lng, 'common');

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
