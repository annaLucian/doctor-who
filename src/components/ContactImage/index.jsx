import Image from 'next/image';
import { StyledContactImage } from '@/components/ContactImage/conctactImage.styles';

export const metadata = {
  title: 'Contact | Doctor Who ',
  description: 'This page shows a contact form.',
};

export default function ContactImage() {
  return (
    <StyledContactImage>
      <Image
        src="/assets/img/svg/persistencia.svg"
        width={200}
        height={200}
        alt="symbol of the series persistence"
        className="symbolPersistence"
      />
      <Image
        src="/assets/img/svg/resistencia.png"
        width={260}
        height={260}
        alt="symbol of the series resistance"
        className="symbolResistance"
      />
      <Image
        src="/assets/img/svg/vencer.svg"
        width={220}
        height={220}
        alt="symbol of the series victory"
        className="symbolVencer"
      />
    </StyledContactImage>
  );
}
