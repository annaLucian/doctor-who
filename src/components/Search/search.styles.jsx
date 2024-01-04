import styled from 'styled-components';

export const FormSearch = styled.form`
  width: 12rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  &:hover svg path {
    fill: #ffc67e;
  }
  input#searchBar {
    margin: 0 auto;
    width: 100%;
    height: 2rem;
    font-size: 2rem;
    background-color: unset !important;
    outline: none;
    text-align: center;
    font-weight: var(--fw-semibold);
    font-family: var(--font-montserrat);
    &:focus {
      border-bottom: 1px solid #ffc67e;
      transition: 0.35s ease;
      color: var(--color-tertiary);
    }

    &:focus::-webkit-input-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &::placeholder {
      color: white;
      opacity: 1;
    }
    &:focus::-moz-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &:focus:-ms-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media (min-width: 1000px) {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    input#searchBar {
      font-size: 1.1rem;
      text-align: start;
    }
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
  @media (min-width: 1200px) {
    width: 20rem;
  }
  @media (min-width: 1600px) {
    width: 25rem;
  }
`;
