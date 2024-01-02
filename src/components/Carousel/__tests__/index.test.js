import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from '@/components/Carousel/index.jsx';

describe('<Carrousel/>', () => {
  test('should be present a first image', () => {
    render(<Carousel />);
    const firstImg = screen.getByText(/The Giggle/i);
    expect(firstImg.textContent).toBe('The Giggle');
  });
  test('should display the following image when you click on the button', async () => {
    const user = userEvent.setup();
    render(<Carousel />);
    const secondImage = screen.getByText(/Allons-y!/i);
    const nextButton = screen.getByRole('button', { name: '1' });
    await user.click(nextButton);

    expect(secondImage.textContent).toBe('Allons-y!');
  });
  test('should click on the button to redirect to the correct page.', async () => {
    render(<Carousel />);
    const btnCarousel = screen.getByTestId('btn-carousel-1');
    expect(btnCarousel).toHaveAttribute('href', 'https://www.doctorwho.tv/');
  });
});
