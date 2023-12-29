import { getData } from '@/services/doctor';
import Image from 'next/image';
import { StyledButton } from '@/components/Carousel/carousel.styles';
import { StyledCharacter } from '@/app/characters/characters.styles';
export default async function Page({ params }) {
  const slug = params.slug;
  const doctors = await getData();

  const doctorFinded = doctors.filter((doctor) => {
    return doctor.id === parseInt(slug);
  });
  return (
    <StyledCharacter>
      <h1>Conoce a {doctorFinded[0].doctor}</h1>
      <div className="character__img">
        <Image
          src={doctorFinded[0].image}
          width={260}
          height={390}
          alt={`${doctorFinded[0].doctor} de la serie doctor who`}
          className=""
        />
      </div>
      <div className="character__content">
        <h1>Conoce a {doctorFinded[0].doctor}</h1>
        <p>{doctorFinded[0].description}</p>
        <StyledButton>
          <a href="https://www.doctorwho.tv/" target="_blank">
            Ver más
          </a>
        </StyledButton>
      </div>
    </StyledCharacter>
  );
}
