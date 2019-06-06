import React from "react";
import PropTypes from "prop-types";
import { Prompt } from "react-router-dom";
import AppState from "./AppState";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      showPromptOnNav: false
    };
  }

  savePassword(event) {
    this.setState({
      password: event.target.value,
      showPromptOnNav: event.target.value.length > 0
    });
  }

  handleFormSubmit(event) {
    const { password } = this.state;
    const { history } = this.props;
    event.preventDefault();
    if (password === "password") {
      AppState.login();
      history.replace("/admin");
    } else {
      alert("Password is wrong.");
    }
  }

  render() {
    const { password, showPromptOnNav } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <h3>Please sign in</h3>
        <input
          type="password"
          placeholder="Type password"
          value={password}
          onChange={this.savePassword.bind(this)}
        />

        <button type="submit"> Submit </button>
        <Prompt
          when={showPromptOnNav}
          message="Are you sure? Your data will be lost."
        />
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.func.isRequired
};
