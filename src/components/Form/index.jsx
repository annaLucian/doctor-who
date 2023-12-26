import { StyledForm } from './form.styles';
import { StyledButton } from '@/components/Carousel/carousel.styles';
export default function Form() {
  return (
    <div>
      <StyledForm action="" id="form">
        <label for="name" className="form__label">
          <input type="text" name="nombre" id="name" />
          <span>
            <span>Nombre</span>
          </span>
        </label>
        <label for="email" className="form__label">
          <input type="email" name="email" id="email" />
          <span>
            <span>Email</span>
          </span>
        </label>
        <label for="message" className="form__label">
          <textarea name="message" id="message" cols="30" rows="50"></textarea>
          <span>
            <span>Mensaje</span>
          </span>
        </label>
      </StyledForm>
      <StyledButton className="btnForm">Enviar</StyledButton>
    </div>
  );
}
