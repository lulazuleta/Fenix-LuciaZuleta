import {ItemCount} from "../../components/ItemCount/ItemCount.js"
import '../Item/Item.css'

export const Item = ({item}) => {

console.log(item)
//let [mensaje, setMensaje] = useState('')
   
let handleClick = ()=> {


     
  //   setMensaje('el producto se agrego correctamente')
}

 return (
<>


  


    <div className="Items">
        
    <p className="detalle">Id: <span>{item.ID}</span></p>
    <p className="detalle">nombre: <span>{item.DESCRIPCION}</span></p>
    <p className="detalle">Precio: <span>{item.Precio}</span></p>

        <div>
        <ItemCount initial={1} stock={30} onAdd={handleClick}/>
<section>



   </section>
        </div>
        
    </div> 


    </>
 )


}