'use client';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../../app/i18n/client';

import Link from 'next/link';
import styles from './menu-items.module.scss';

type MenuItemsProps = {
  lng: string;
};

const MenuItems: React.FC<MenuItemsProps> = ({ lng }) => {
  const pathname = usePathname();
  const { t } = useTranslation(lng, 'nav');

  return (
    <div className={styles.container}>
      <Link
        href="/destinations"
        style={{
          color: pathname === '/destinations' ? 'rgb(240,150,37)' : '',
        }}
      >
        {t('destinations')}
      </Link>
      <Link
        href="/shop"
        style={{
          color: pathname === '/shop' ? 'rgb(240,150,37)' : '',
        }}
      >
        {t('shop')}
      </Link>
      <Link
        href="/contact"
        style={{
          color: pathname === '/contact' ? 'rgb(240,150,37)' : '',
        }}
      >
        {t('contact')}
      </Link>
    </div>
  );
};

export default MenuItems;
