import { useEffect, useState } from "react";
import {ItemDetail} from '../../components/ItemDetail/ItemDetail.js'
import '../ItemDetailContainer/ItemDetailContainer.css'


export const ItemDetailContainer = ()=>{

    const [producto, setProducto] = useState([])

    const listadoProductos = [
        {
            "ID": "PINCFC",
            "DESCRIPCION": "Pinche Feliz cumple",
            "Precio": "32"
        },
        {
            "ID": "PINCDC",
            "DESCRIPCION": "PINCHE FELIZ CUMPLE DOS COLORES",
            "Precio": "33"
        },
        {
            "ID": "BENGDC",
            "DESCRIPCION": "bengala gibre dos colores",
            "Precio": "120"
        }]

        useEffect(()=>{

        const nuevaPromesa = new Promise((res)=>{

            setTimeout (()=>{
                res(listadoProductos[0])

            },2000)
          
        })

        nuevaPromesa.then((res)=>{
            console.log(res)
            setProducto(res)

        })
    },[])
    return (
<>
<section>

<div className="detailTitulo">
<br/>
<br/>
<br/>


<h1>Detalle de Producto!!! :) </h1>
</div>
</section>
 <br/>
<div className="detailProducto">

<ItemDetail item={producto}></ItemDetail>
</div>

</>
    
)
}