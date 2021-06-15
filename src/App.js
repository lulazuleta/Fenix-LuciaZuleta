
import './App.css';
import {NavBar} from './components/navBar/navBar'
import './components/navBar/navBar.css'

function App() {
  return (
    <div className="App">
        <NavBar />

      <header className="App-header">
        <p>
         Proyecto Casa Fenix
        </p>
        <a
          className="App-link"
          href="https://casafenix.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitá nuestra web actual
        </a>
      </header>
    </div>
  );
}

export default App;
