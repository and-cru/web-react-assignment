import React from "react";
import { Route, Switch } from "react-router-dom";
import { CurrentUserProvider } from "./components/contexts/users/current-user.context";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import ProfilePage from "./pages/profile-page/profile-page.component";
import BrewersRecipesPage from "./pages/brewers-recipes-page/brewers-recipes-page.component";
import CreateBrewerPage from "./pages/create-brewer-page/create-brewer-page.component";
import CreateRecipePage from "./pages/create-recipe-page/create-recipe-page.component";

function App() {
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

export default App;
