import './products.css';
import {NavBar} from '../../components/navBar/navBar'
import {ItemListContainer}from '../../components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from '../../components/ItemDetailContainer/ItemDetailContainer'





export const Products =() => {
  return (
    <div className="App">
        <NavBar/>
        
        <ItemListContainer />

<br></br>
<br></br>
        <ItemDetailContainer/>
      

      
    </div>
  );
}

