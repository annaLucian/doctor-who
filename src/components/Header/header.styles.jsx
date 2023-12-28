import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & .header__logoIcon--mobile {
    padding: 1rem 2rem 0.8rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  & form {
    margin-bottom: 9rem;
  }
  .active {
    color: #ffc67e;
    border-bottom: 1px solid #ffc67e;
    padding-bottom: 0.8rem;
  }
  @media (min-width: 1000px) {
    position: unset;
    padding-top: 1rem;
    .header__SearchLinks {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & .socialLinks li a svg {
      width: 1.3rem;
    }
    & form {
      margin-bottom: 0;
    }
    .header__SearchLinks {
      flex-basis: 35%;
      gap: 4rem;
    }
    & .header__logoIcon--mobile {
      display: none;
    }
  }
  @media (min-width: 1600px) {
  }
`;

export const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 8rem;
  z-index: ${({ open }) => (open ? '9' : '-1')};
  background: var(--color-primary);
  padding: 2rem;
  width: 100%;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: opacity 0.2s ease-in-out;
  & .header__logoIcon--desktop {
    display: none;
  }
  & .header__links {
    list-style: none;
  }
  & .header__links li {
    margin-bottom: 1.7rem;
  }
  & a {
    font-size: 2rem;
    font-weight: var(--fw-semibold);
    color: var(--color-tertiary);
    font-family: var(--font-montserrat);
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: #ffc67e;
    }
  }
  @media (min-width: 1000px) {
    height: auto;
    opacity: 1;
    padding: 2rem;
    top: 0;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    z-index: 9;
    & .header__links {
      display: flex;
      gap: 2.5rem;
      flex-basis: 35%;
    }
    & .header__links li a {
      font-size: 1rem;
    }
    & .header__links li {
      margin-bottom: 0;
    }
    & .header__logoIcon--desktop {
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0.05rem;
    }
    & .header__logoIcon--desktop picture img {
      width: 8rem;
      height: 8rem;
    }
  }
  @media (min-width: 1200px) {
    padding: 2rem 6rem;
  }

  @media (min-width: 1600px) {
    padding: 2rem 8rem;
  }
`;

export const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.7rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2.7rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#EFFFFA' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 6px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  @media (min-width: 1000px) {
    display: none;
  }
  @media (min-width: 1600px) {
  }
`;
