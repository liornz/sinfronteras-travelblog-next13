import ExtendedLogo from './extended-logo';
import MenuItems from './menu-items';
import SocialMedia from './social-media';
import Newsletter from './newsletter-registration';
import styles from './footer.module.scss';

type FooterProps = {
  lng: string;
  drawerWidth: number;
};

const Footer: React.FC<FooterProps> = ({ lng, drawerWidth }) => {
  return (
    <div className={styles.container} style={{ width: 'calc(100% - 240px)', marginLeft: `${drawerWidth}px` }}>
      <ExtendedLogo lng={lng} />
      <MenuItems lng={lng} />
      <SocialMedia />
      <Newsletter lng={lng} />
    </div>
  );
};

export default Footer;
