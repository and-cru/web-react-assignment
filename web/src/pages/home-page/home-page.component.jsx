import React from "react";
import Button from "@material-ui/core/Button";

import "./home-page.styles.scss";

const HomePage = (props) => (
  <div className="home-page">
    <Button
      className="home-page-button"
      variant="contained"
      size="large"
      onClick={() => props.history.push("/brewersrecipes")}
    >
      Lets go Brew!
    </Button>
  </div>
);

export default HomePage;
