import { Route, Switch } from "react-router-dom";
// import axios from "axios";

import "./App.css";

import HomePage from "./pages/home-page/home-page.component";
import CreateBrewerPage from "./pages/create-brewer-page/create-brewer-page.component";
import CreateRecipePage from "./pages/create-recipe-page/create-recipe-page.component";
import ProfilePage from "./pages/profile-page/profile-page.component";
import BrewersRecipesPage from "./pages/brewers-recipes-page/brewers-recipes-page.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/brewersrecipes" component={BrewersRecipesPage} />
        <Route path="/createbrewer" component={CreateBrewerPage} />
        <Route path="/createrecipe" component={CreateRecipePage} />
      </Switch>
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
