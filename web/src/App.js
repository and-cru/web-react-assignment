import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import {
  CurrentUserContext, // REMOVE
  CurrentUserProvider,
} from "./components/contexts/users/current-user.context";
// import axios from "axios";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import ProfilePage from "./pages/profile-page/profile-page.component";
import BrewersRecipesPage from "./pages/brewers-recipes-page/brewers-recipes-page.component";
import CreateBrewerPage from "./pages/create-brewer-page/create-brewer-page.component";
import CreateRecipePage from "./pages/create-recipe-page/create-recipe-page.component";

function App() {
  //TO BE REMOVED: DEVELOPMENT ONLY! track currentUser state
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  // -----------------------------------------
  return (
    <div className="App">
      <CurrentUserProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/brewersrecipes/:profileId" component={ProfilePage} />
          <Route path="/brewersrecipes" component={BrewersRecipesPage} />
          <Route path="/createbrewer" component={CreateBrewerPage} />
          <Route path="/createrecipe" component={CreateRecipePage} />
        </Switch>
      </CurrentUserProvider>
    </div>
  );
}
//const API_URL = "http://localhost:8080";

// const checker = async () => {
//   const health = await axios.get(`${API_URL}/health`, {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//   });

//   console.log("Healh: ", health);
// };

// const CorsChecker = async () => {
//   const response = await fetch(
//     "http://localhost:8080/brewers/?skip=0&limit=100"
//   );
//   const resJson = await response.json();

//   console.log(resJson[0]["recipes"][0].description);
// };

export default App;
