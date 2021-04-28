import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { CurrentUserContext } from "../../components/contexts/users/current-user.context";

import "./profile-page.styles.scss";

import BrewerCard from "../../components/brewer-card/brewer-card.component";

const ProfilePage = (props) => {
  //initialise state
  const [brewer, setBrewer] = useState([]);

  const currentUser = useContext(CurrentUserContext);
  // const brewerId = currentUser.id;

  if (props.match.params.profileId === ":profileId") {
    const brewerId = currentUser.id;
  } else {
    const brewerId = parseInt(props.match.params.profileId);
  }

  const brewerId =
    props.match.params.profileId === ":profileId"
      ? currentUser.id
      : parseInt(props.match.params.profileId);
  // console.log(props.match.params.profileId);
  // const profileId = parseInt(props.match.params.profileId);

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

  console.log(brewer);

  return (
    <div className="">
      <h1>My Profile </h1>
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

export default withRouter(ProfilePage);
