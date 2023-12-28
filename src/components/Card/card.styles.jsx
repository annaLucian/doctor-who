import styled from 'styled-components';

export const StyledCard = styled.div`
  color: var(--color-tertiary);
  max-width: 350px;
  margin: 0 auto 2.5rem;

  .card__background {
    position: relative;
    width: 100%;
    height: 30rem;
    overflow: hidden;
    box-shadow:
      -1px 1px 4px #000000,
      0px 1px 5px #000000;
  }

  .card__content {
    position: absolute;
    top: ${(props) => (props.$ishover ? '0.3rem' : '0')};
    left: ${(props) => (props.$ishover ? '0.3rem' : '0')};
    width: ${(props) => (props.$ishover ? 'calc(100% - 0.6rem)' : '100%')};
    height: ${(props) => (props.$ishover ? 'calc(100% - 0.6rem)' : '100%')};
    z-index: 2;
    overflow: hidden;
    transition: ease all 0.8s;
    outline: ${(props) => (props.$ishover ? '1px solid white' : 'none')};
  }
  .card__background > div:first-child {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background-color: #0429b3;
    filter: blur(15px);
  }
  .animate-bg {
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
  .bg__image {
    background-image: url(/assets/img/doctors/First_Doctor_Peter_Cushing.jpg);
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    height: 100%;
  }

  & > h5 {
    margin-top: 1.5rem;
    font-size: 2rem;
    font-weight: var(--fw-bold);
  }
  & > p {
    margin-top: 1rem;
    font-size: 1.8rem;
    font-family: var(--font-montserrat);
    font-weight: var(--fw-regular);
    font-style: italic;
  }
  & > time {
    display: block;
    font-family: var(--font-montserrat);
    font-weight: var(--fw-regular);
    margin-top: 1rem;
    font-size: 1.8rem;
  }
  & > button {
    width: 65%;
    padding: 0.5rem 1.7rem;
    margin: 2rem 0;
  }
  @media (min-width: 600px) {
    max-width: 400px;
    margin: 0;
    margin-bottom: 1rem;
    flex-basis: calc(50% - 2rem);
    .card__background {
      height: 25rem;
    }
    & > h5 {
      font-size: 1.5rem;
    }
    & > p {
      font-size: 1.2rem;
    }
    & > time {
      font-size: 1.2rem;
    }
    & > button {
      width: 90%;
      padding: 0.4rem 1.7rem;
    }
  }
  @media (min-width: 800px) {
    .card__background {
      height: 30rem;
    }
  }
  @media (min-width: 900px) {
    flex-basis: calc(34% - 2rem);
    .card__background {
      height: 28rem;
    }
  }
  @media (min-width: 1200px) {
    & > button {
      width: 82%;
    }
  }
  @media (min-width: 1400px) {
    flex-basis: calc(25% - 1.5rem);
  }
  @media (min-width: 1600px) {
    max-width: 450px;
    flex-basis: calc(19% - 1rem);
    & > button {
      width: 75%;
    }
  }
`;
