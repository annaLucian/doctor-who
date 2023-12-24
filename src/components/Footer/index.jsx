import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import { StyledFooter } from './footer.styles';

export default function Footer() {
  return (
    <StyledFooter>
      <picture>
        <Image
          src="/assets/img/logos/logo-cadena.png"
          width={35}
          height={35}
          alt="logo of cadena of the serie"
        />
      </picture>
      <SocialLinks />
    </StyledFooter>
  );
}
