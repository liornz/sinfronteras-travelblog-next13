import DestinationText from './destination-text';
import DestinationMap from './destination-map';
import { location } from '../../utils/types';

import styles from './site-info.module.scss';
import React from 'react';

interface Props {
  text: string;
  location: location;
  zoom: number;
  google_api: string;
  lng: string;
}

// eslint-disable-next-line react/display-name
const SiteInfo: React.FC<Props> = React.memo((props) => {
  const { text, location, zoom, google_api, lng } = props;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <DestinationText lng={lng} text={text} />
        <DestinationMap location={location} zoom={zoom} google_api={google_api} />
      </div>
    </div>
  );
});

export default SiteInfo;
