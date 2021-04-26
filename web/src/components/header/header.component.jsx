import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/profile">
          My Profile
        </Link>
        <Link className="option" to="/profile">
          Recipes
        </Link>
        <Link className="option" to="/createrecipe">
          Create Recipe
        </Link>
        <Link className="option" to="/createbrewer">
          Create Brewer
        </Link>
      </div>
    </div>
  );
};
export default Header;
