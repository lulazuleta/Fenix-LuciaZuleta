//import {producto} from '../../img/XLVI19.PNG'
//import { useState } from "react"
import { useState } from 'react'
import {ItemListContainer} from '../ItemListContainer/ItemListContainer.js'



export const ItemCount = ()=> {
    
    const [product, setProduct] = useState('')

    const handleClick =()=> {
        return (
        setProduct('el producto se agrego al carrito')
        )

    }

   
    return (
        <div>
        <ItemListContainer onAdd={handleClick}/>
<section>
        <p>{product}</p>
        </section>
        </div>
    )



}

//<a> <img src={producto} alt="producto1"/> </a>