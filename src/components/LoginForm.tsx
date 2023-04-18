import React from 'react';

interface LoginFormForm {
  email: string;
  password: string;
}

class LoginForm extends React.Component {
  state: LoginFormForm;

  constructor(smth: any) {
    super(smth); // fix the annoying warning in the console

    this.state = {
      email: '',
      password: '',
    };

    this.clickOnButton = this.clickOnButton.bind(this);
    this.handlePreventDefault = this.handlePreventDefault.bind(this);
  }

  async clickOnButton(e: any) {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(this.state),
    });
  }

  handlePreventDefault(e: any) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handlePreventDefault(e)} className="p-4 border border-gray text-xl">
        Please log-in !
        <div className="mt-4">
          <div className="text-base">Email</div>
          <input
            data-testid="login-email-input"
            className="border border-gray-200"
            onChange={(e: any) => {
              return this.setState({
                email: e.target.value,
                password: this.state.password,
              });
            }}
          />
        </div>
        <div className="mt-4 mb-8">
          <div className="text-base">Password</div>
          <input
            data-testid="login-password-input"
            className="border border-gray-200"
            onChange={(e: any) => {
              return this.setState({
                email: this.state.email,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            data-testid="login-submit-button"
            className="bg-blue-500 text-white p-2 rounded relative float-left left-1/2 -translate-x-1/2"
            type="submit"
            value="Log-in"
            onClick={this.clickOnButton}
          />
        </div>
      </form>
    );
  }
}

export default LoginForm;
