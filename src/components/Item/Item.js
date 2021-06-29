import {ItemCount} from "../../components/ItemCount/ItemCount.js"

export const Item = ({item}) => {

console.log(item)
//let [mensaje, setMensaje] = useState('')
   
let handleClick = ()=> {


     
  //   setMensaje('el producto se agrego correctamente')
}

 return (
<>


  


    <div className="ItemListContainer">
        
    <p>Id: <span>{item.ID}</span></p>
    <p>nombre: <span>{item.DESCRIPCION}</span></p>
    <p>Precio: <span>{item.Precio}</span></p>

        <div>
        <ItemCount initial={1} stock={30} onAdd={handleClick}/>
<section>
{  /*      <p>{mensaje}</p>*/}     


   </section>
        </div>
        
    </div> 


    </>
 )


}