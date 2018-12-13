import React, { Component } from "react";
import GithubLoginPresenter from "./GithubLoginPresenter";

/**
 * GithubLoginContainer
 */
class GithubLoginContainer extends Component {
  render() {
    return <GithubLoginPresenter onLoginGithub={this._loginGithub} />;
  }

  _loginGithub = async () => {
    window.location.href = "http://localhost:4000/auth/github";
  };
}
export default GithubLoginContainer;
