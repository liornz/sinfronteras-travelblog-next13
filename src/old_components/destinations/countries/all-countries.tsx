import CountriesGrid from './countries-grid';
import styles from './all-countries.module.scss';
import { country } from '@/utils/types';
import { useTranslation } from '../../../app/i18n';

interface Props {
  countries: country[];
  lng: string;
}

const AllCountries: React.FC<Props> = async ({ countries, lng }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div>
      <div className={styles.container}>
        <h1 className="header">{t('select')}</h1>
        <div className="header-underline"></div>
        <div className={styles.divider}></div>
      </div>
      <CountriesGrid countries={countries} />
    </div>
  );
};

export default AllCountries;
