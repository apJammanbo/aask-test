import React from "react";
import { Link } from "react-router-dom";

/**
 * MainPresenter
 */
const MainPresenter = () => (
  <div>
    <p>MainPage 입니다.</p>
    <Link to={"/login"}>
      <button>Go To Login</button>
    </Link>
  </div>
);
export default MainPresenter;
