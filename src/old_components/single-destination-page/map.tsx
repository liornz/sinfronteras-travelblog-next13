'use client';
import { useEffect } from 'react';
import styles from './map.module.scss';
import { Loader } from '@googlemaps/js-api-loader';

interface Props {
  location:
    | {
        lat: number;
        lng: number;
      }
    | undefined;
  width: number | string;
  height: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  zoom: number;
  google_api: string;
}

const Map: React.FC<Props> = (props) => {
  const { location, width, height, zoom, minWidth, minHeight, google_api } = props;
  useEffect(() => {
    const loader = new Loader({
      apiKey: google_api,
      version: 'weekly',
    });
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: location,
        zoom: zoom,
      });
      new google.maps.Marker({
        map: map,
        position: location,
      });
    });
  }, [google_api, location, zoom]);

  return (
    <div
      style={{
        width: width,
        height: height,
        minWidth: minWidth,
        minHeight: minHeight,
      }}
      className={styles.map_area}
      id="map"
    >
      Google Maps cannot be displayed - we apologize for the inconvinience!
    </div>
  );
};

export default Map;
