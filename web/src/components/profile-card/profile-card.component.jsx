import React from "react";

import "./profile-card.styles.scss";

import RecipeCard from "../recipe-card/recipe-card.component";

const ProfileCard = ({ name, id, recipes, history, match }) => {
  return (
    <div className="profile-card-container">
      {recipes.map(({ id, ...otherRecipeProps }) => (
        <RecipeCard key={id} {...otherRecipeProps} />
      ))}
      <hr />
    </div>
  );
};

export default ProfileCard;
