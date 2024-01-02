import Image from 'next/image';
import SocialLinks from '../SocialLinks';
import { StyledFooter } from './footer.styles';

export default function Footer() {
  return (
    <StyledFooter>
      <picture data-testid="picture">
        <Image
          src="/assets/img/logos/logo-cadena.png"
          width={35}
          height={35}
          alt="logo cadena de la serie"
        />
      </picture>
      <SocialLinks />
    </StyledFooter>
  );
}
