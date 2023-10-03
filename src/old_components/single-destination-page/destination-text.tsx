import MarkDown from 'react-markdown';
import styles from './destination-text.module.scss';
import { useTranslation } from '../../app/i18n';

interface Props {
  text: string;
  lng: string;
}

const DestinationText: React.FC<Props> = async (props) => {
  const { text, lng } = props;
  const { t } = await useTranslation(lng, 'destination');

  return (
    <div className={styles.text}>
      <h3>{t('title')}</h3>
      <MarkDown>{text}</MarkDown>
    </div>
  );
};

export default DestinationText;
