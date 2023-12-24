'use client';
import styled from 'styled-components';

export const SliderContainer = styled.div`
  .slick-dots {
    bottom: 1rem;
    list-style: none;
    padding: 1rem 1.5rem;
    text-align: end;
  }
  & li {
    margin: 0 8px;
    width: 15px;
    height: 15px;
    border: 2px solid #fff;
    box-sizing: border-box;
    border-radius: 50%;
  }
  & li button {
    display: block;
    width: 0;
    height: 0;
    padding: 0.3125em;
    transition: background-color 0.2s ease-in-out;
    border: 0;
    outline: none;
    color: transparent;
    font-size: 0;
    line-height: 0;
    cursor: pointer;
    appearance: none;
  }
  .slick-dots li.slick-active button:before,
  .slick-dots li button:before {
    color: unset;
  }

  .slick-dots li button:focus {
    background-color: #ffc67e;
  }
  .slick-dots li.slick-active {
    width: 15px;
    height: 15px;
    border: 2px solid #ffc67e;
    background-color: #ffc67e;
    border-radius: 50%;
  }
  @media (min-width: 1000px) {
    .slick-dots {
      padding: 1rem 8rem;
    }
    .slick-dots li.slick-active {
      width: 18px;
      height: 18px;
    }
    & li {
      width: 18px;
      height: 18px;
    }
  }
`;

export const StyledCarouselItem = styled.div`
  background-image: url(${(props) => props.$imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 40rem;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  .carouselItem__title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: var(--fw-bold);
    color: var(--color-tertiary);
    font-family: var(--ff-lato);
  }
  @media (min-width: 1000px) {
    height: 55rem;
    background-position: top;
    padding: 0 8rem;
    .carouselItem__title {
      font-size: 4rem;
      margin-bottom: 3rem;
    }
  }
`;

export const StyledButton = styled.button`
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-out;
  border: 0;
  background: #ffc67e;
  padding: 0.8rem 1.7rem;
  width: 45%;
  font-size: 1.3rem;
  border-radius: 6rem;
  cursor: pointer;
  font-weight: var(--fw-bold);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &::after {
    content: ' ';
    position: absolute;
    height: 100%;
    width: 0;
    background: #f7941c;
    border-color: #f7941c;
    right: 0;
    top: 0;
    border-radius: 6rem;
    z-index: -1;
    transition: all 0.3s ease-out;
  }
  &:hover:after {
    width: 100%;
  }
  .btnLink {
    color: #000;
    text-decoration: none;
  }
  @media (min-width: 800px) {
    width: 25%;
  }
  @media (min-width: 1200px) {
    width: 20%;
    font-size: 1.7rem;
  }
  @media (min-width: 1600px) {
    width: 15%;
    font-size: 1.7rem;
  }
`;
