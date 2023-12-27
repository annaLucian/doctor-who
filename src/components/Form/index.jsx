import { useState } from 'react';
import { StyledForm, StyledFormContainer } from './form.styles';
import { StyledButton } from '@/components/Carousel/carousel.styles';
export default function Form() {
  /*cambia el estado del input*/
  const [isFocus, setIsFocus] = useState(false);
  const [values, setValues] = useState({
    nombre: '',
    email: '',
    message: '',
  });
  const [hasError, setHasError] = useState({
    nombre: false,
    email: false,
    message: false,
  });
  const handleBlur = (event) => {
    const inputValue = event.target.value;
    const targetName = event.target.name;
    const isHigherThanOne = inputValue.length >= 1;
    setHasError({ ...hasError, [targetName]: isHigherThanOne ? false : true });
    setIsFocus(isHigherThanOne);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /*obtengo la data del localstorage en caso contrario obtengo un array vacio*/
    const localStorageData =
      JSON.parse(localStorage.getItem('contactForm')) || [];
    localStorageData.push(values);
    localStorage.setItem('contactForm', JSON.stringify(localStorageData));
    /* 
    TODO: Añadir al localStorage.
    */
  };

  // Object.values => coge los values de un  objecto y retorna un array: {a:"value a", b:"value b"} => ["value a", "value b"]
  // .some se usa en arrays, buscando si "algun" item coincide con la codicion de retorno en la funcion callback.
  const isDisabled = Object.values(values).some((valor) => valor === '');
  return (
    <StyledFormContainer>
      <StyledForm id="form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form__label">
          <input
            type="text"
            name="nombre"
            id="name"
            value={values.nombre}
            onChange={(event) =>
              setValues({ ...values, nombre: event.target.value })
            }
            onBlur={handleBlur}
            className={`${isFocus ? 'white' : ''} ${
              hasError.nombre ? 'red' : ''
            }`}
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
            value={values.email}
            onChange={(event) =>
              setValues({ ...values, email: event.target.value })
            }
            onBlur={handleBlur}
            className={`${isFocus ? 'white' : ''} ${
              hasError.email ? 'red' : ''
            }`}
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
            value={values.message}
            onChange={(event) =>
              setValues({ ...values, message: event.target.value })
            }
            className={`${isFocus ? 'white' : ''} ${
              hasError.message ? 'red' : ''
            }`}
          ></textarea>
          <span className="textareaSpan">
            <span className={isFocus ? 'hidden' : ''}>Mensaje</span>
          </span>
        </label>
        <StyledButton className="btnForm" disabled={isDisabled}>
          Enviar
        </StyledButton>
      </StyledForm>
      <p>Todos los campos con (*) son obligatorios</p>
    </StyledFormContainer>
  );
}
