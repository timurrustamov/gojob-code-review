import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('logs the user', async () => {
    const { getByTestId } = render(<LoginForm />);
    global.fetch = jest.fn();

    const loginEmailInput = getByTestId('login-email-input');
    const loginPasswordInput = getByTestId('login-password-input');

    await userEvent.type(loginEmailInput, 'candidat@gojob.com');
    await userEvent.type(loginPasswordInput, 'gojob123');

    await userEvent.click(getByTestId('login-submit-button'));

    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        email: 'candidat@gojob.com',
        password: 'gojob123',
      }),
    });
  });
});
