import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import GithubLogin from "../../components/Login/GithubLogin";

/**
 * LoginPresenter
 */
const LoginPresenter = () => (
  <Fragment>
    <Helmet>
      <title>LoginPage : BoilerPlate</title>
    </Helmet>
    <div>
      <p>LoginPage 입니다.</p>
    </div>
    <GithubLogin />
  </Fragment>
);
export default LoginPresenter;
