import './App.css';
import {NavBar} from './components/navBar/navBar'
import {ItemListContainer}from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from '../src/components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <div className="App">
        <NavBar/>
        
        <ItemListContainer />

<br></br>
<br></br>

      

        <ItemDetailContainer/>
      

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
