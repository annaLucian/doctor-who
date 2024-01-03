import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header/index.jsx';

jest.mock('next/navigation', () => {
  const originalModule = jest.requireActual('next/navigation');
  return {
    __esModule: true,
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

  test('should link to correct route', () => {
    render(<Header />);
    const doctorLink = screen.getByRole('link', { name: /doctores/i });
    const characterLink = screen.getByRole('link', { name: /conoce/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });

    expect(doctorLink).toHaveAttribute('href', '/doctors');
    expect(characterLink).toHaveAttribute('href', '/characters');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  test('should activate the menu by clicking on the hunger icon', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const burgerIcon = screen.getByTestId('burger-icon');
    await user.click(burgerIcon);

    const nav = screen.getByTestId('nav-bar');
    expect(getComputedStyle(nav).opacity).toBe('1');
  });

  // test('should activate a link when clicked', async () => {
  //   window.location.pathname = '/doctors';
  //   window.location.assign('http://localhost:3001/doctors');
  //   render(<Header />);
  //   const user = userEvent.setup();
  //   const doctorLink = screen.getByText(/doctores/i);
  //   console.log(prettyDOM(doctorLink));

  //   console.log(window.location.pathname);
  //   const characterLink = screen.getByRole('link', { name: /conoce/i });
  //   await user.click(doctorLink);
  //   console.log(prettyDOM(doctorLink));
  //   expect(doctorLink).toHaveClass('active');
  //   expect(getComputedStyle(doctorLink).borderBottom).toBe('1px solid #ffc67e');
  // });

  test('should be able to see the search and social links', () => {
    render(<Header />);
    const searchComponent = screen.getByTestId('search-form');
    const socialLinks = screen.getByTestId('list-social');

    expect(searchComponent).toBeInTheDocument();
    expect(socialLinks).toBeInTheDocument();
  });
});
