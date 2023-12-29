'use client';
import { StyledCard } from '@/components/Card/card.styles';
import Image from 'next/image';
import { StyledButton } from '@/components/Carousel/carousel.styles';
import { useState } from 'react';

export default function Card({ doctor }) {
  const [isHover, setIsHover] = useState(false);
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
        onMouseLeave={handleOnMouseLeave}
        onMouseOver={handleMouseOver}
      >
        Ver más
      </StyledButton>
    </StyledCard>
  );
}
