import Image from 'next/image';
import { StyledContactImage } from '@/components/ContactImage/conctactImage.styles';

export const metadata = {
  title: 'Contact | Doctor Who ',
  description: 'This page shows a contact form.',
};

export default function ContactImage() {
  return (
    <StyledContactImage>
      <h1 className="titleContact__desktop">Envia tu mensaje al Doctor</h1>
      <p className="textoRequired--blue">
        Todos los campos con (*) son obligatorios
      </p>
      <Image
        src="/assets/img/svg/persistencia.svg"
        width={200}
        height={200}
        alt="simbolo de la serie persistencia"
        className="symbolPersistence"
      />
      <Image
        src="/assets/img/svg/resistencia.png"
        width={260}
        height={260}
        alt="simbolo de la serie resistencia"
        className="symbolResistance"
      />
      <Image
        src="/assets/img/svg/vencer.svg"
        width={220}
        height={220}
        alt="simbolo de la serie vencer"
        className="symbolVencer"
      />
    </StyledContactImage>
  );
}
