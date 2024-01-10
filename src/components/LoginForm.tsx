import React from "react";
import { User } from "../domain/user";

export class LoginForm extends React.Component {
  state: User;

  constructor(smth: any) {
    super(smth);

    this.state = {
      email: "",
      password: "",
    };

    this.clickOnButton = this.clickOnButton.bind(this);
    this.handlePreventDefault = this.handlePreventDefault.bind(this);
  }

  clickOnButton(e: any) {
    console.log(this.state);
  }

  handlePreventDefault(e: any) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handlePreventDefault(e)} className="form">
          Please log-in !
          <div className="email-container">
            <div className="label">Email</div>
            <input
              placeholder="entrez une valeur"
              className="input"
              onChange={(e: any) => {
                return this.setState({
                  email: e.target.value,
                  password: this.state.password,
                });
              }}
            />
          </div>
          <div className="password-container">
            <div className="label">Password</div>
            <input
              className="input"
              placeholder="entrez une valeur"
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
              className="login-button"
              type="submit"
              value="Log-in"
              onClick={this.clickOnButton}
            />
          </div>
        </form>
      </>
    );
  }
}
