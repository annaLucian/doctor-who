'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  StyledCarouselItem,
  StyledButton,
  SliderContainer,
} from './carousel.styles';
import Slider from 'react-slick';

export const CAROUSEL_PROPS = [
  {
    id: '1',
    title: 'The Giggle',
    imgUrl: '/assets/img/carrusel/carrusel-2.jpg',
  },
  {
    id: '2',
    title: 'Allons-y!',
    imgUrl: '/assets/img/carrusel/carrusel-1.jpg',
  },
  {
    id: '3',
    title: 'Wild Blue Yonder',
    imgUrl: '/assets/img/carrusel/carrusel-4.jpg',
  },
  {
    id: '4',
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
    <SliderContainer className="slider-container" role="carousel">
      <Slider {...settings}>
        {CAROUSEL_PROPS.map((props) => {
          return (
            <div key={props.title}>
              <StyledCarouselItem $imgUrl={props.imgUrl}>
                <h3 className="carouselItem__title">{props.title}</h3>
                <StyledButton className="carouselItem__btn">
                  <a
                    href="https://www.doctorwho.tv/"
                    target="_blank"
                    className="btnLink"
                    data-testid={`btn-carousel-${props.id}`}
                  >
                    Ver ahora
                  </a>
                </StyledButton>
              </StyledCarouselItem>
            </div>
          );
        })}
      </Slider>
    </SliderContainer>
  );
}
