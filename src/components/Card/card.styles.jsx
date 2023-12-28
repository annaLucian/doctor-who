import styled from 'styled-components';

export const StyledCard = styled.div`
  color: var(--color-tertiary);
  max-width: 300px;
  margin: 0 auto;
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
    background-position: center;
    background-size: cover;
    height: 60vh;
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
`;
