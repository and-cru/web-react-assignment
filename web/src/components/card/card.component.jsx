import React from "react";

import "./card.styles.scss";

const Card = ({ title, description, bean_type, brew_method, taste_notes }) => (
  <div className="card-container">
    <h1> {title} </h1>
    <p>{description}</p>
    <p>{bean_type}</p>
    <p>{brew_method}</p>
    <p>{taste_notes}</p>
  </div>
);

export default Card;
