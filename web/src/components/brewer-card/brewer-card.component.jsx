import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./brewer-card.styles.scss";

import RecipeCard from "../recipe-card/recipe-card.component";

const BrewerCard = ({ name, id, recipes, history, match }) => {
  console.log(match);
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
        {/* {recipe.title.toUpperCase()} : {recipe.description}:{" "}
              {recipe.brew_method} :{recipe.bean_type}
            */}

        <Button variant="contained" color="primary">
          Primary
        </Button>
        {/* <button onClick={() => history.push("http://localhost:9000/profile")}>
          View Profile
        </button> */}
      </div>
    </div>
  );
};

export default withRouter(BrewerCard);

// {brewers.map(({ id, ...otherBrewersProps }) => (
//           <BrewerCard key={id} id={id} {...otherBrewersProps} />
//         ))}
