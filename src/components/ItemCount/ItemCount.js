import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import {faMinusSquare} from '@fortawesome/free-solid-svg-icons'
import { isConditionalExpression } from 'typescript'





export const ItemCount = ({initial, stock, onAdd})=> {
    let [stocks, setStocks] = useState(stock)
    let [cantidad, setCantidad] = useState(initial)

    console.log(stocks)
    console.log(cantidad);

    function incrementar (){

    if (cantidad<=30){
        setCantidad(cantidad+1);
        console.log("El producto se agrego correctamente")
        setStocks(stocks-1)
                         }  
                        }

                    
    function disminuir (){

        if (cantidad>0 && cantidad<30 )
        setCantidad(cantidad-1);
        setStocks(stocks+1)
       
    }
   
    return (
<div className="catalogo" style={{backgroundColor: "#c2c2c2", height:"200px", width:"200px", marginLeft:"auto", marginRight:"auto"}}>
       
       

       <div className="ItemCount">           
       <button onClick={disminuir}><span>-</span></button>
                
                <span>{cantidad}</span>
                <button onClick={incrementar}><span>+</span></button> <br/>
            <button id='btnAdd' className='btn-carrito' onClick={onAdd}>Agregar al Carrito</button>
        </div>

   </div>
    )

}

