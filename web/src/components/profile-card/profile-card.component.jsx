import React from "react";
import RecipeCard from "../recipe-card/recipe-card.component";

import "./profile-card.styles.scss";

const ProfileCard = ({ recipes }) => {
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
