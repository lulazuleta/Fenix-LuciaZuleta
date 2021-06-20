
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

