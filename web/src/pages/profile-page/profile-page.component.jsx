import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../components/contexts/users/current-user.context";

import "./profile-page.styles.scss";

const ProfilePage = () => {
  //initialise state
  const [brewer, setBrewer] = useState([]);

  const currentUser = useContext(CurrentUserContext);
  const brewerId = currentUser.id;

  //run side-effect fetch whenever ProfilePage renders
  useEffect(() => {
    const fetchBrewer = async () => {
      const response = await fetch(`http://localhost:8080/brewers/${brewerId}`);
      const resJson = await response.json();
      setBrewer(resJson);
    };
    fetchBrewer();
  }, []);

  console.log(brewer);
  console.log(brewer.recipes);

  return (
    <div className="">
      <h1>My Profile </h1>
      <div>
        <h2>{brewer.name}</h2>
        <h3>{brewer.id}</h3>
      </div>
    </div>
  );
};

export default ProfilePage;
