import React, { Component } from "react";
import Input from "./common/Input";

export default class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  validate = () => {
    const errors = {};
    const { username, password } = this.state.account;

    if (username.trim().length === 0) errors.username = "Username is required.";

    if (password.trim().length === 0) errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateInput = input => {
    if (input.name === "username") {
      if (input.value.trim().length === 0) return "Username is required.";
    }

    if (input.name === "password") {
      if (input.value.trim().length === 0) return "Password is required.";
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    //Destructured the event parameter (e)
    const errors = { ...this.state.errors };
    const account = { ...this.state.account };

    const errorMessage = this.validateInput(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
