import React from "react";

/**
 * GithubLoginPresenter
 */
const GithubLoginPresenter = props => (
  <div>
    <button onClick={props.onLoginGithub}>Login with Github</button>
  </div>
);
export default GithubLoginPresenter;
