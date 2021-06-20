import './App.css';
import {NavBar} from './components/navBar/navBar'

import {ItemCount}from './components/ItemCount/ItemCount'




function App() {
  return (
    <div className="App">
        <NavBar/>
        
        <ItemCount/>
      

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
