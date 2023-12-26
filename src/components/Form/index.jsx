import { useState } from 'react';
import { StyledForm, StyledFormContainer } from './form.styles';
import { StyledButton } from '@/components/Carousel/carousel.styles';
export default function Form() {
  /*cambia el estado del input*/
  const [isFocus, setIsFocus] = useState(false);
  const handleBlur = (event) => {
    const inputValue = event.target.value;
    setIsFocus(inputValue.length >= 1);
  };
  return (
    <StyledFormContainer>
      <StyledForm action="" id="form">
        <label htmlFor="name" className="form__label">
          <input
            type="text"
            name="nombre"
            id="name"
            onBlur={handleBlur}
            className={isFocus ? 'white' : ''}
          />
          <span>
            <span className={isFocus ? 'hidden' : ''}>Nombre</span>
          </span>
        </label>
        <label htmlFor="email" className="form__label">
          <input
            type="email"
            name="email"
            id="email"
            onBlur={handleBlur}
            className={isFocus ? 'white' : ''}
          />
          <span>
            <span className={isFocus ? 'hidden' : ''}>Email</span>
          </span>
        </label>
        <label htmlFor="message" className="form__label">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="50"
            onBlur={handleBlur}
            className={isFocus ? 'white' : ''}
          ></textarea>
          <span className="textareaSpan">
            <span className={isFocus ? 'hidden' : ''}>Mensaje</span>
          </span>
        </label>
      </StyledForm>
      <StyledButton className="btnForm">Enviar</StyledButton>
    </StyledFormContainer>
  );
}
