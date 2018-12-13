import React, { Component } from "react";
import MainPresenter from "./MainPresenter";

/**
 * MainContainer
 */
class MainContainer extends Component {
  componentDidMount() {
    // 유저정보를 얻어온다.
    this._getMe();
  }

  render() {
    return <MainPresenter />;
  }

  _getMe = async () => {
    const response = await fetch("/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
    }
  };
}

export default MainContainer;
