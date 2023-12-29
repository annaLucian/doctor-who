'use client';
import Image from 'next/image';
import { StyledButton } from '@/components/Carousel/carousel.styles';
import { StyledCharacter } from '@/app/characters/characters.styles';
// export const metadata = {
//   title: 'Characters',
//   description: 'This page shows information about a character.',
// };
export default function Characters() {
  return (
    <StyledCharacter>
      <h1>Conoce a ... decimotercera doctor</h1>
      <div className="character__img">
        <Image
          src="/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg"
          width={260}
          height={390}
          alt="decimotercera doctora de la serie doctcharacter__imgor who"
          className=""
        />
      </div>
      <div className="character__content">
        <h1>Conoce a ... decimotercera doctor</h1>
        <p>
          La Decimotercera Doctora es una brillante bola de energía,
          hiperactiva, excitable y que habla a mil por hora desde el primer
          momento en que la conocemos. Llena de asombro y admiración por el
          universo, es una exploradora encantadora que defiende la justicia y la
          bondad siempre que puede. En sus propias palabras: Cuando la gente
          necesita ayuda, nunca me niego.
        </p>
        <StyledButton>Ver más</StyledButton>
      </div>
    </StyledCharacter>
  );
}
