import { useEffect, useState } from "react";

import {ItemList} from "../ItemList/ItemList"

export const ItemListContainer = ()=> {

    const [catalogo, setCatalogo] = useState([])

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

        const nuevaPromesa = new Promise((res, rej)=>{

            setTimeout (()=>{
                res(listadoProductos)

            },2000)
          
        })

        nuevaPromesa.then((res)=>{
            console.log(res)
            setCatalogo(res)

        })
    },[])


   
    return (
<>

<h1>Productos</h1> <br/>
<ItemList items={catalogo}></ItemList>

</>
    
)
}


