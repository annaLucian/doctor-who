import React from 'react';
import { render, screen } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/Footer/index.jsx';

describe('<Footer/>', () => {
  test('should display a list of icons', () => {
    render(<Footer />);
    const containerList = screen.getByRole('list');
    expect(containerList).toBeInTheDocument();
  });
  test(' should be able to see the logo', () => {
    render(<Footer />);
    const logo = screen.getByTestId('picture');
    expect(logo).toBeInTheDocument();
  });
});
