import React, { useState, useEffect } from "react";

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
  //   console.log(brewers[1].recipes);

  return (
    <div className="">
      <h1>Recipes</h1>
    </div>
  );
};

export default BrewersRecipesPage;
