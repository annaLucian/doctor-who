import styled from 'styled-components';

export const StyledContactImage = styled.div`
  position: relative;
  height: 50rem;
  & img {
    position: absolute;
    animation: speed 4s ease-in-out;
  }

  .symbolPersistence {
    animation-delay: 3s;
    left: 20%;
  }
  .symbolResistance {
    animation-delay: 2s;
    left: 36%;
    top: 8%;
  }
  .symbolVencer {
    animation-delay: 1s;
    left: 15%;
    top: 34%;
  }
  @keyframes speed {
    0% {
      transform: translate(0%);
      border-radius: 50%;
    }

    25% {
      transform: translate(150%) scale(0.5);
      border-radius: 0%;
    }

    50% {
      transform: translate(150%, 150%);
      border-radius: 50%;
    }

    75% {
      transform: translate(0, 150%) scale(0.5);
      border-radius: 0%;
    }
  }
`;
