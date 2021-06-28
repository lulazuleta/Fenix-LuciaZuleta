import {ItemCount} from "../../components/ItemCount/ItemCount.js";

export const ItemListContainer = ()=> {
   
    let handleClick = ()=> {

   
         
         setProduct('el producto se agrego correctamente')
 }
    return (

    <div className="ItemListContainer">
        
        <h1>Productos</h1> <br/>

        <div>
        <ItemCount initial={1} stock={30} onAdd={handleClick}/>
<section>
        <p>{product}</p>
        </section>
        </div>
        
    </div>
)
}