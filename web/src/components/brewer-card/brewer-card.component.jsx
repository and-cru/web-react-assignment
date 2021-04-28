import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./brewer-card.styles.scss";

import RecipeCard from "../recipe-card/recipe-card.component";

const BrewerCard = ({ name, id, recipes, history, match }) => {
  return (
    <div className="brewer-card-container">
      <h1> {name.toUpperCase()} </h1>
      <p>{id}</p>
      <div>
        {recipes
          .filter((item, idx) => idx < 1)
          .map(({ id, ...otherRecipeProps }) => (
            <RecipeCard key={id} {...otherRecipeProps} />
          ))}

        <Button
          className="brewer-card-button"
          onClick={() => history.push(`${match.url}/${id}`)}
          variant="outlined"
        >
          View all recipes by brewer
        </Button>
      </div>
    </div>
  );
};

export default withRouter(BrewerCard);
