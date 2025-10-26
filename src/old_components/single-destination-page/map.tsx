'use client';
import { useEffect } from 'react';
import styles from './map.module.scss';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';

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
    // Set the API options for the new v2.0.1 API (only once globally)
    setOptions({
      key: google_api,
      v: 'weekly',
    });

    // Load the maps library using the new importLibrary function
    importLibrary('maps').then(({ Map }) => {
      const map = new Map(document.getElementById('map') as HTMLElement, {
        center: location,
        zoom: zoom,
      });
      new google.maps.Marker({
        map: map,
        position: location,
      });
    }).catch((error) => {
      console.error('Google Maps API error:', error);
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
