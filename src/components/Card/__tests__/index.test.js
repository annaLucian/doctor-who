import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '@/components/Card/index.jsx';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

const doctorMock = {
  id: 16,
  doctor: 'Decimocuarto Doctor',
  actor: 'David Tennant',
  screen_time: '2022-2023',
  image: '/assets/img/doctors/Fourteenth_Doctor_David_Tennant.jpg',
  description:
    'Un tumultuoso enfrentamiento con el Amo hizo que el Doctor fuera regenerado a la fuerza en su mejor enemigo, y viceversa, con la ayuda de Yaz y algunos amigos más del Doctor. Sin embargo, el Doctor quedó herido de muerte por la experiencia; y tras despedirse de Yaz, se regeneró en paz y solo. Pero el nuevo Doctor descubrió que su nuevo rostro era en realidad un viejo rostro: ¡el de una de sus anteriores encarnaciones!.',
};
describe('<Card/>', () => {
  test('should have a class when the user hover', async () => {
    const user = userEvent.setup();
    render(<Card doctor={doctorMock} />);
    const cardComponent = screen.getByTestId('card-component');
    expect(cardComponent).toHaveAttribute('data-is-hover', 'false');

    await user.hover(screen.getByTestId('button-card'));
    expect(cardComponent).toHaveAttribute('data-is-hover', 'true');
  });

  test('should redirect correctly when you click on the button', async () => {
    const user = userEvent.setup();

    render(<Card doctor={doctorMock} />);

    const btnCard = screen.getByTestId('button-card');

    await user.click(btnCard);
    expect(useRouter().push).toHaveBeenCalledTimes(1);
    expect(useRouter().push).toHaveBeenCalledWith('/characters/16');
  });
});
