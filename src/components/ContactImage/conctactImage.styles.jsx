import styled from 'styled-components';

export const StyledContactImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 50rem;
  width: 100%;
  & img {
    position: absolute;
  }
  .symbolPersistence {
    opacity: 0;
    top: 2%;
    animation: on-load 2.5s infinite ease-in-out forwards;
  }
  .symbolResistance {
    left: 50%;
    top: 15%;
    opacity: 0;
    animation: on-load 3s infinite ease-in-out 0.8s;
  }
  .symbolVencer {
    top: 30%;
    opacity: 0;
    animation: on-load 6s infinite ease-in-out 1.5s;
  }

  @keyframes on-load {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }
    70% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.7;
      transform: scale(1);
    }
  }
`;
