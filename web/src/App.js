import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
const API_URL = "http://localhost:8080";

function App() {
  const checker = async () => {
    const health = await axios.get(`${API_URL}/health`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    console.log("Healh: ", health);
  };

  const CorsChecker = async () => {
    const response = await fetch(
      "http://localhost:8080/brewers/?skip=0&limit=100"
    );
    const resJson = await response.json();

    console.log(resJson[0]["recipes"][0].description);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={checker}>
          <p>Click me!</p>
        </button>
        <button onClick={CorsChecker}>
          <p>View Brewers</p>
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi Jonny
        </a>
      </header>
    </div>
  );
}

export default App;
