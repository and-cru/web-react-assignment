import React, { useState, useEffect } from "react";

import "./profile-page.styles.scss";

const ProfilePage = () => {
  const [brewer, setBrewer] = useState([]);

  useEffect(() => {
    const fetchBrewer = async () => {
      const response = await fetch(`http://localhost:8080/brewers/2`);
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
