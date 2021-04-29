import React, { useState, useEffect } from "react";
import BrewerCard from "../../components/brewer-card/brewer-card.component";

import "./brewers-recipes-page.styles.scss";

const BrewersRecipesPage = () => {
  //initialise state
  const [brewers, setBrewers] = useState([]);

  //run side-effect fetch whenever BrewersRecipePage renders
  useEffect(() => {
    const fetchBrewers = async () => {
      const response = await fetch(
        "http://localhost:8080/brewers/?skip=0&limit=100"
      );
      const resJson = await response.json();
      setBrewers(resJson);
    };
    fetchBrewers();
  }, []);

  console.log(brewers);

  return (
    <div className="brewers-recipes-page">
      <h1>RECIPES</h1>
      <div className="brewers-recipes-cardlist">
        {brewers.map(({ id, ...otherBrewersProps }) => (
          <BrewerCard key={id} id={id} {...otherBrewersProps} />
        ))}
      </div>
    </div>
  );
};

export default BrewersRecipesPage;
