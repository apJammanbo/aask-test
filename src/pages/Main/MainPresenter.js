import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Main from "../../components/Main";

/**
 * MainPresenter
 */
const MainPresenter = () => (
  <Fragment>
    <Helmet>
      <title>MainPage : BoilerPlate</title>
    </Helmet>
    <Main />
  </Fragment>
);
export default MainPresenter;
