import styled from 'styled-components';

export const FormSearch = styled.form`
  width: 12rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  input#searchBar {
    margin: 0 auto;
    width: 100%;
    height: 2rem;
    margin-left: 1rem;
    font-size: 1.8rem;
    background-color: unset;
    outline: none;
    &:focus {
      border-bottom: 1px solid var(--color-tertiary);
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
`;
