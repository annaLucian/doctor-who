import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '@/components/Search/index.jsx';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));
describe('<Search/>', () => {
  test('should be available in the search component', () => {
    render(<Search setOpen={() => {}} />);
    const inputSearch = screen.getByTestId('search-form');
    expect(inputSearch).toBeInTheDocument();
  });
  test('should correctly submit the form with the correct search query', async () => {
    const user = userEvent.setup();
    render(<Search setOpen={() => {}} />);
    const inputSearch = screen.getByPlaceholderText('Buscar');
    await user.type(inputSearch, 'william');

    const formSearch = screen.getByTestId('search-form');
    fireEvent.submit(formSearch);
    expect(useRouter().push).toHaveBeenCalledWith('/doctors?search=william');
  });
});
