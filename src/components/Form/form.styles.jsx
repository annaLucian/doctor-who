import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 0 2rem;
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
    z-index: 999;
    span {
      position: absolute;
      top: 0;
      z-index: 1;
      font-size: 1.1rem;
      color: #fff;
      text-indent: 10px;
      transition: 0.3s;
      -webkit-transition: 0.3s;
      -moz-transition: 0.3s;
      opacity: 0.5;
    }
    &:before {
      content: '';
      width: 0%;
      height: 3px;
      background-color: #ffc67e;
      position: absolute;
      bottom: 0;
      left: 0%;
      z-index: 99;
      transition: 0.3s;
      -webkit-transition: 0.3s;
      -moz-transition: 0.3s;
    }
    &:after {
      content: '';
      width: 0%;
      height: 3px;
      background-color: #ffc67e;
      position: absolute;
      bottom: 0;
      right: 0%;
      z-index: 99;
      transition: 0.3s;
      -webkit-transition: 0.3s;
      -moz-transition: 0.3s;
    }
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
    z-index: 99;
    &:focus {
      outline: 0;
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
`;
