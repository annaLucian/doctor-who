'use client';
import { StyledCard } from '@/components/Card/card.styles';
import { StyledButton } from '@/components/Carousel/carousel.styles';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Card({ doctor }) {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const handleClick = (id) => {
    router.push(`/characters/${id}`);
  };
  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleOnMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <StyledCard $ishover={isHover} $urlImg={doctor.image}>
      <div className="card__background">
        <div className={`${isHover ? 'animate-bg' : ''}`}></div>
        <div className="card__content">
          <div className="bg__image"></div>
        </div>
      </div>
      <h5>{doctor.doctor}</h5>
      <p>{doctor.actor}</p>
      <time>{doctor.screen_time}</time>
      <StyledButton
        onClick={() => handleClick(doctor.id)}
        onMouseLeave={handleOnMouseLeave}
        onMouseOver={handleMouseOver}
      >
        Ver más
      </StyledButton>
    </StyledCard>
  );
}
