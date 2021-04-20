import logo from './logo.svg';
import './App.css';
import axios from 'axios'
const API_URL = 'http://localhost:8080'

function App() {
  const checker = async () => {
    const health = await axios.get(`${API_URL}/health`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })

    console.log('Healh: ', health)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={checker}>
          <p>
            Click me!
          </p>
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
