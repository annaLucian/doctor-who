import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 0 2rem;

  .btnForm {
    padding: 0.5rem 1.7rem;
    z-index: 10;
  }
  @media (min-width: 1000px) {
    padding: 2rem 6rem;
  }
  @media (min-width: 1200px) {
    padding: 0;
    flex-basis: 40%;
    position: unset;
    height: auto;
    .btnForm {
      width: 55%;
      font-size: 1.2rem;
    }
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 80%;

  .form__label {
    float: left;
    width: 100%;
    height: 3rem;
    margin: 3.5rem 0 0 0;
    position: relative;
    clear: both;
  }

  span {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    position: absolute;
    left: 0%;
    color: white;
    z-index: 1;
  }

  span span {
    position: absolute;
    top: 0;
    z-index: 2;
    font-size: 1.1rem;
    color: #fff;
    text-indent: 10px;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    opacity: ${({ isWhite }) => (isWhite ? '0' : '0.5')};
  }
  span.hidden {
    opacity: 0;
  }
  span:before,
  span:after {
    content: '';
    width: 0%;
    height: 3px;
    background-color: #ffc67e;
    position: absolute;
    bottom: 0;
    z-index: 3;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
  }

  span:before {
    left: 0%;
  }

  span:after {
    right: 0%;
  }

  .textareaSpan {
    height: 10rem;
  }

  input,
  textarea {
    width: 100%;
    height: 3rem;
    border: 0.2rem solid #fff;
    background-color: var(--color-primary);
    color: #fff;
    font-size: 1.1rem;
    position: relative;
    padding: 0 0.8rem;

    &:focus {
      outline: 0;
    }

    &.white {
      background-color: var(--color-primary);
    }
  }

  textarea {
    height: 10rem;
  }

  & input:focus + span,
  & textarea:focus + span {
    span {
      cursor: initial;
      position: absolute;
      top: -3rem;
      color: #ffc67e;
      opacity: 1;
      z-index: 6;
    }

    &:before {
      width: 50%;
    }

    &:after {
      width: 50%;
    }
  }

  span.fixed {
    span {
      top: -35px;
    }
  }
  @media (min-width: 1200px) {
    height: 70%;
  }
  @media (min-width: 1400px) {
    height: 80%;
    .form__label {
      height: 4rem;
    }
    input {
      height: 4rem;
    }
    span {
      height: 4rem;
    }
  }
  @media (min-width: 1600px) {
    .textareaSpan,
    textarea {
      height: 20rem;
    }
  }
`;
