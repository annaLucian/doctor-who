import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header/index.jsx';
jest.mock('next/navigation', () => {
  const originalModule = jest.requireActual('next/navigation');

  return {
    __esModule: true, // Use it when dealing with esModules
    ...originalModule,
    useRouter: jest.fn(),
  };
});

describe('<Header />', () => {
  test('should render a list of links', () => {
    render(<Header />);

    const doctorLink = screen.getByRole('link', { name: /doctores/i });
    const characterLink = screen.getByRole('link', { name: /conoce/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });

    expect(doctorLink).toBeInTheDocument();
    expect(characterLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  // test('should reddirect to correct pages', async () => {
  //   let assignMock = jest.fn();

  //   render(<Header />);

  //   const doctorLink = screen.getByRole('link', { name: /doctores/i });
  //   const characterLink = screen.getByRole('link', { name: /conoce/i });
  //   const contactLink = screen.getByRole('link', { name: /contact/i });
  //   await userEvent.click(doctorLink);

  //   expect(window.location.assign('/dd')).toHaveBeenCalledWith('/doctors');
  // });
  test('should activate the menu by clicking on the hunger icon', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const burgerIcon = screen.getByTestId('burger-icon');
    await user.click(burgerIcon);

    const nav = screen.getByTestId('nav-bar');
    expect(nav).toHaveClass('open');
  });
});
