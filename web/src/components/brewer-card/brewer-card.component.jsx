import React from "react";

import "./brewer-card.styles.scss";

const BrewerCard = ({ name, recipes }) => (
  <div className="card-container">
    <h1> {name} </h1>
    <div>
      {recipes.map((recipe) => (
        <p key={recipe.id}>
          {recipe.title.toUpperCase()} : {recipe.description}:{" "}
          {recipe.brew_method} :{recipe.bean_type}
        </p>
      ))}
    </div>
  </div>
);

export default BrewerCard;
