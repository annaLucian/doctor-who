'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  StyledCarouselItem,
  StyledButton,
  SliderContainer,
} from './carousel.styles';
import Slider from 'react-slick';

const CAROUSEL_PROPS = [
  { title: 'The Giggle', imgUrl: '/assets/img/carrusel/carrusel-2.jpg' },
  { title: 'Allons-y!', imgUrl: '/assets/img/carrusel/carrusel-1.jpg' },
  {
    title: 'Wild Blue Yonder',
    imgUrl: '/assets/img/carrusel/carrusel-4.jpg',
  },
  {
    title: 'Meet the new Doctor...',
    imgUrl: '/assets/img/carrusel/carrusel-3.jpg',
  },
];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <SliderContainer className="slider-container">
      <Slider {...settings}>
        {CAROUSEL_PROPS.map((props) => {
          return (
            <div key={props.title}>
              <StyledCarouselItem $imgUrl={props.imgUrl}>
                <h3 className="carouselItem__title">{props.title}</h3>
                <StyledButton className="carouselItem__btn">
                  Ver ahora
                </StyledButton>
              </StyledCarouselItem>
            </div>
          );
        })}
      </Slider>
    </SliderContainer>
  );
}
