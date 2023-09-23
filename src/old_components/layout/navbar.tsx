import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './navbar.module.scss';
import { useTranslation } from '../../app/i18n/client';
import { Trans } from 'react-i18next/TransWithoutContext';
import { CSSTransition } from 'react-transition-group';

interface Props {
  show: boolean;
  toggle?: () => void;
  isMobile: boolean;
  lng: string;
}

const Navbar: React.FC<Props> = ({ lng, show, isMobile, toggle }) => {
  const pathname = usePathname();
  const { t } = useTranslation(lng, 'nav');

  const navList = (
    <ul>
      <li onClick={toggle}>
        <Link
          href="/destinations"
          style={{
            color: pathname === '/destinations' ? 'rgb(240,150,37)' : '',
          }}
        >
          {t('destinations')}
          <div className={styles.underline}></div>
        </Link>
      </li>
      <li onClick={toggle}>
        <Link
          href="/shop"
          style={{
            color: pathname === '/shop' ? 'rgb(240,150,37)' : '',
          }}
        >
          {t('shop')}
          <div className={styles.underline}></div>
        </Link>
      </li>
      <li onClick={toggle}>
        <Link
          href="/contact"
          style={{
            color: pathname === '/contact' ? 'rgb(240,150,37)' : '',
          }}
        >
          {t('contact')}
          <div className={styles.underline}></div>
        </Link>
      </li>
      <li onClick={toggle}>
        <Trans i18nKey="languageSwitcher" t={t}>
          <Link className={styles.button} href={lng === 'en' ? '/es' : '/en'}>
            {lng === 'en' ? 'ESP' : 'ENG'}
          </Link>
        </Trans>
      </li>
    </ul>
  );

  const output = !isMobile ? (
    <nav className={styles.navigation_desktop}>{navList}</nav>
  ) : (
    <CSSTransition
      in={show}
      timeout={500}
      classNames={{
        enterActive: styles.nav_opened,
        exitActive: styles.nav_closed,
      }}
      mountOnEnter
      unmountOnExit
    >
      <nav className={styles.navigation_mobile}>{navList}</nav>
    </CSSTransition>
  );

  return output;
};

export default Navbar;
