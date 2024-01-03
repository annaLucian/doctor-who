import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '@/components/Form/index.jsx';

describe('<Form/>', () => {
  test('should see a form', () => {
    render(<Form />);
    const inputName = screen.getByTestId('name-input');
    const inputEmail = screen.getByTestId('email-input');
    const inputMessage = screen.getByTestId('message-input');
    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputMessage).toBeInTheDocument();
  });
  test('should update the values of the inputs when the user types', async () => {
    const user = userEvent.setup();
    render(<Form />);
    const inputName = screen.getByTestId('name-input');
    const inputEmail = screen.getByTestId('email-input');
    const inputMessage = screen.getByTestId('message-input');

    await user.type(inputName, 'Jimena Lara');
    await user.type(inputEmail, 'jimena@gmail.com');
    await user.type(inputMessage, 'esto es un mensaje, de prueba');

    expect(inputName.value).toBe('Jimena Lara');
    expect(inputEmail.value).toBe('jimena@gmail.com');
    expect(inputMessage).toHaveValue('esto es un mensaje, de prueba');
  });
  test('should submit the form and save the data in localStorage', async () => {
    // const mockGetItem = jest.fn();
    // const mockSetItem = jest.fn();
    // const localStorageMock = {
    //   getItem: mockGetItem,
    //   setItem: mockSetItem,
    //   clear: jest.fn(),
    // };
    // window.localStorage = localStorageMock;

    const user = userEvent.setup();
    render(<Form />);
    const inputName = screen.getByTestId('name-input');
    const inputEmail = screen.getByTestId('email-input');
    const inputMessage = screen.getByTestId('message-input');

    await user.type(inputName, 'Jimena Lara');
    await user.type(inputEmail, 'jimena@gmail.com');
    await user.type(inputMessage, 'esto es un mensaje, de prueba');

    const btnForm = screen.getByTestId('btn-Form');
    await user.click(btnForm);
    console.log(window.localStorage);
    // expect().toHaveBeenCalled();

    // const storedData = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);
    // expect(storedData).toHaveLength(1);
    // expect(storedData[0].name).toBe('Jimena Lara');
    // expect(storedData[0].email).toBe('jimena@gmail.com');
    // expect(storedData[0].message).toBe('esto es un mensaje, de prueba');
  });
});
