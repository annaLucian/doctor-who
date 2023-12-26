import styled from 'styled-components';

export const StyledContactImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 35rem;
  width: 100%;
  & img {
    position: absolute;
  }
  .titleContact__desktop {
    display: none;
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
    top: 40%;
    left: 2%;
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
  @media (min-width: 550px) {
    .symbolResistance {
      left: 50%;
      width: 20rem;
      height: 20rem;
    }
    .symbolPersistence {
      left: 5%;
    }
    .symbolVencer {
      top: 40%;
      left: 8%;
      width: 15rem;
      height: 15rem;
    }
  }
  @media (min-width: 768px) {
    height: 38rem;
    .symbolPersistence {
      left: 5%;
      width: 15rem;
      height: 15rem;
    }
    .symbolResistance {
      width: 22rem;
      height: 22rem;
    }
    .symbolVencer {
      top: 50%;
      left: 8%;
      width: 18rem;
      height: 18rem;
    }
  }
  @media (min-width: 1000px) {
    height: 42rem;
    .symbolPersistence {
      left: 5%;
      width: 20rem;
      height: 20rem;
    }
    .symbolResistance {
      width: 25rem;
      height: 25rem;
    }
    .symbolVencer {
      top: 50%;
      left: 8%;
      width: 22rem;
      height: 22rem;
    }
  }
  @media (min-width: 1200px) {
    flex-basis: 60%;
    .symbolPersistence {
      left: 2%;
      width: 15rem;
      height: 15rem;
    }
    .symbolResistance {
      width: 20rem;
      height: 20rem;
      left: 40%;
    }
    .symbolVencer {
      top: 50%;
      left: 5%;
      width: 17rem;
      height: 17rem;
    }
  }

  @media (min-width: 1400px) {
    .titleContact__desktop {
      display: block;
      color: white;
      padding: 2.5rem 2rem;
      font-weight: var(--fw-bold);
      font-size: 2.5rem;
    }
    .symbolPersistence {
      top: 20%;
    }
    .symbolResistance {
      top: 30%;
    }
    .symbolVencer {
      top: 56%;
      left: 8%;
    }
  }
  @media (min-width: 1600px) {
    height: 55rem;
    .symbolPersistence {
      top: 20%;
      left: 10%;
      width: 18rem;
      height: 18rem;
    }
    .symbolResistance {
      width: 25rem;
      height: 25rem;
      top: 40%;
      left: 35%;
    }
    .symbolVencer {
      top: 55%;
      left: 2%;
      width: 21rem;
      height: 21rem;
    }
  }
`;
