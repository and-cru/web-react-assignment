import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { CurrentUserContext } from "../../components/contexts/users/current-user.context";

import "./profile-page.styles.scss";

import ProfileCard from "../../components/profile-card/profile-card.component";

const ProfilePage = (props) => {
  //initialise state
  const [brewer, setBrewer] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  //conditional to render based on url or currentUser
  const brewerId =
    props.match.params.profileId === ":profileId"
      ? currentUser.id
      : parseInt(props.match.params.profileId);

  const headerToggle =
    props.match.params.profileId === ":profileId" ? true : false;

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

  console.log(brewer.name);

  return (
    <div className="profile-page">
      {headerToggle ? <h1>My Profile</h1> : <h1>Brewer Profile</h1>}
      <div className="profile-cardlist">
        {brewer
          .filter((item) => item.id === brewerId)
          .map(({ id, ...otherBrewerProps }) => (
            <ProfileCard key={id} id={id} {...otherBrewerProps} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(ProfilePage);
