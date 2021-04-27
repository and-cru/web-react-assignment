import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../components/contexts/users/current-user.context";

import "./profile-page.styles.scss";

import BrewerCard from "../../components/brewer-card/brewer-card.component";

const ProfilePage = () => {
  //initialise state
  const [brewer, setBrewer] = useState([]);

  const currentUser = useContext(CurrentUserContext);
  const brewerId = currentUser.id;

  //run side-effect fetch whenever ProfilePage renders
  useEffect(() => {
    const fetchBrewer = async () => {
      const response = await fetch(
        "http://localhost:8080/brewers/?skip=0&limit=100"
      );
      const resJson = await response.json();
      setBrewer(resJson);
    };
    fetchBrewer();
  }, []);

  // if (brewer.name) {
  //   const recipes = brewer.recipes;
  //   const recipe = () =>
  //     recipes.forEach((element) => {
  //       console.log(element);
  //     });
  //   recipe();

  console.log(brewer);

  return (
    <div className="">
      <h1>My Profile </h1>
      {/* <p>{brewer.name}</p>
      <p>{brewer.id}</p> */}
      <div>
        {brewer
          .filter((item) => item.id === brewerId)
          .map(({ id, ...otherBrewerProps }) => (
            <BrewerCard key={id} {...otherBrewerProps} />
          ))}
      </div>
    </div>
  );
};

export default ProfilePage;
