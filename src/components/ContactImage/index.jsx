import Image from 'next/image';
import { StyledContactImage } from '@/components/ContactImage/conctactImage.styles';

export const metadata = {
  title: 'Contact | Doctor Who ',
  description: 'This page shows a contact form.',
};

export default function ContactImage() {
  return (
    <div>
      <h1>Envia tu mensaje al Doctor</h1>
      <StyledContactImage>
        <Image
          src="/assets/img/svg/persistencia.svg"
          width={280}
          height={280}
          alt="symbol of the series persistence"
          className="symbolPersistence"
        />
        <Image
          src="/assets/img/svg/resistencia.svg"
          width={500}
          height={500}
          alt="symbol of the series resistance"
          className="symbolResistance"
        />
        <Image
          src="/assets/img/svg/vencer.svg"
          width={320}
          height={320}
          alt="symbol of the series victory"
          className="symbolVencer"
        />
      </StyledContactImage>
    </div>
  );
}
