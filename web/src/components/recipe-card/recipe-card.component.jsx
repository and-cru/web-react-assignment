import React from "react";
import image from "../../assets/images/recipeImg.png";
import "./recipe-card.styles.scss";

const RecipeCard = ({ ...otherRecipeProps }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt="" style={{ width: "100%" }} />
      <h3>{otherRecipeProps.title.toUpperCase()}</h3>
      <span className="recipe-description">
        {otherRecipeProps.description.toUpperCase()}
      </span>
      <p>Brew Method : {otherRecipeProps.brew_method}</p>
      <p>Bean Type : {otherRecipeProps.bean_type}</p>
      <p>Brew Time (mins) : {otherRecipeProps.brew_time}</p>
      <p>Taste Notes : {otherRecipeProps.taste_notes}</p>
    </div>
  );
};

export default RecipeCard;
