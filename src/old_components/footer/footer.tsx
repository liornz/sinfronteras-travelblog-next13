import ExtendedLogo from './extended-logo';
import MenuItems from './menu-items';
import SocialMedia from './social-media';
import Newsletter from './newsletter-registration';
import styles from './footer.module.scss';

type FooterProps = {
  lng: string;
};

const Footer: React.FC<FooterProps> = ({ lng }) => {
  return (
    <div className={styles.container}>
      <ExtendedLogo lng={lng} />
      <MenuItems lng={lng} />
      <SocialMedia />
      <Newsletter lng={lng} />
    </div>
  );
};

export default Footer;
