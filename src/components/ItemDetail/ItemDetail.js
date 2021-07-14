import { useState } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'

export const ItemDetail = ({item}) => {

console.log(item)

const [terminar, setTerminar] = useState(null);

function onAdd() {
    setTerminar(".");
  }
   


 return (
<>
    <div className="ItemDetail">
        
    <p>Id: <span>{item.ID}</span></p>
    <p>nombre: <span>{item.DESCRIPCION}</span></p>
    <p>Precio: <span>{item.Precio}</span></p>

        <div>        
<section>

<br/><br/><br/>

   </section>
        </div>


        {!terminar ? (
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          ) : (     <Link to={`/cart/`}>
          <div>
            <button>
              Terminar compra
            </button>
          </div>
        </Link>
      )}
        
    </div> 
    
    </>
 )


}
