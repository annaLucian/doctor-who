import styled from 'styled-components';

export const StyledCharacter = styled.section`
  padding: 2rem 0;
  color: var(--color-tertiary);
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 30%;
    left: -20%;
    width: 18rem;
    height: 18rem;
    opacity: 0.5;
    background-image: url(/assets/img/svg/persistencia-2.svg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    animation: on-load 2.5s infinite ease-in-out forwards;
  }
  &::after {
    content: '';
    position: absolute;
    top: 14%;
    right: -20%;
    width: 20rem;
    height: 20rem;
    background-image: url(/assets/img/svg/resistencia.png);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    animation: on-load 4s infinite ease-in-out;
    opacity: 0.5;
  }
  & h1 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
    padding: 0 2rem;
  }
  & .character__img {
    display: flex;
    justify-content: center;
    position: relative;
  }
  @keyframes on-load {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }
    70% {
      opacity: 0.6;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.7;
      transform: scale(1);
    }
  }
  & .character__img img {
    box-shadow:
      -2px -2px 0px #0030ff,
      1px 0px 7px #0029ff;
    z-index: 1;
  }
  & p {
    padding: 3rem 2rem 3rem 2rem;
    font-family: var(--font-montserrat);
    font-size: 1.2rem;
  }
  & button {
    width: 55%;
    padding: 0.5rem 1.7rem;
    left: 2rem;
    margin-bottom: 4rem;
  }
  .character__content h1 {
    display: none;
  }
  @media (min-width: 600px) {
    &::after {
      width: 22rem;
      height: 22rem;
    }
    &::before {
      width: 20rem;
      height: 20rem;
      top: 26%;
      left: -10%;
    }
  }
  @media (min-width: 700px) {
    &::after {
      width: 24rem;
      height: 24rem;
    }
    &::before {
      width: 22rem;
      height: 22rem;
      top: 35%;
    }
    & .character__img img {
      width: 25rem;
      height: 38rem;
    }
    & h1 {
      font-size: 3rem;
    }
    & p {
      font-size: 1.5rem;
    }
    & button {
      padding: 1rem 1.7rem;
      font-size: 1.6rem;
    }
  }
  @media (min-width: 1000px) {
    &::after {
      width: 28rem;
      height: 28rem;
      right: -10%;
    }
    &::before {
      width: 26rem;
      height: 26rem;
      top: 32%;
      left: -2%;
    }
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 4rem;
    padding: 4rem 6rem;
    & h1 {
      display: none;
    }
    .character__content {
      z-index: 1;
      padding-top: 3rem;
    }
    .character__content h1 {
      font-size: 2.5rem;
      display: block;
    }
    &::after {
      width: 25rem;
      height: 25rem;
      top: 30%;
      right: 20%;
      opacity: 1;
    }
    &::before {
      width: 22rem;
      height: 22rem;
      right: -10%;
      top: 55%;
      opacity: 1;
    }
    & p {
      font-size: 1.2rem;
      padding-top: 0;
    }
    & button {
      padding: 0.6rem 1.7rem;
      font-size: 1.2rem;
      width: 50%;
    }
  }
  @media (min-width: 1400px) {
    padding: 4rem 6rem;
    gap: 6rem;
    & button {
      padding: 0.8rem 1.7rem;
      font-size: 1.3rem;
      width: 45%;
    }
    &::after {
      width: 28rem;
      height: 28rem;
      top: 35%;
    }
    .character__content h1 {
      padding: 0;
    }
    & p {
      padding-right: 0;
      padding-left: 0;
    }
    & button {
      left: 0;
    }
  }
  @media (min-width: 1600px) {
    padding: 6rem 12rem;
  }
  & p {
    font-size: 1.3rem;
  }
  .character__content,
  .character__img {
    flex-basis: 50%;
  }
  .character__img {
    justify-content: end;
  }
  .character__content h1 {
    font-size: 3rem;
  }
  &:after {
    width: 30rem;
    height: 30rem;
    top: 25%;
    right: 25%;
  }
  &::before {
    width: 26rem;
    height: 26rem;
    right: -10%;
    top: 50%;
    opacity: 1;
  }
`;
