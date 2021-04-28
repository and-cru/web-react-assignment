import React from "react";

import "./profile-card.styles.scss";

import RecipeCard from "../recipe-card/recipe-card.component";

const ProfileCard = ({ name, id, recipes, history, match }) => {
  return (
    <div className="brewer-card-container">
      <div>
        {recipes.map(({ id, ...otherRecipeProps }) => (
          <RecipeCard key={id} {...otherRecipeProps} />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
