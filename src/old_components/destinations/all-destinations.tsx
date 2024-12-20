'use client';

import { useTranslation } from '../../app/i18n/client';
import { country, post } from '../../utils/types';
import DestinationsGrid from '../destinations/destinations-grid';
import styles from './all-destinations.module.scss';

interface Props {
  destinations: post[];
  country: country;
  lng: string;
}

const AllDestinations: React.FC<Props> = (props) => {
  const { destinations, country, lng } = props;
  const { t } = useTranslation(lng, 'common');

  return (
    <>
      <div className={styles.container}>
        <h1 className="header">{`${t('dest')} ${country.name.toUpperCase()}`}</h1>
        <div className="header-underline"></div>
        <div className={styles.divider}></div>
      </div>
      <DestinationsGrid destinations={destinations} image={country.image} slug={country.slug} />
    </>
  );
};

export default AllDestinations;
