import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/users/current-user.context";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser); //REMOVE

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/brewersrecipes">
          Recipes
        </Link>
        {currentUser.id ? (
          <Link className="option" to="/createrecipe">
            Create Recipe
          </Link>
        ) : (
          <Link className="option" to="/createbrewer">
            Create Brewer
          </Link>
        )}
        {currentUser.id && (
          <Link className="option" to="/profile">
            My Profile
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
