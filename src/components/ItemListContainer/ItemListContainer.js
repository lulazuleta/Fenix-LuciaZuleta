

export const ItemListContainer = ({onAdd})=> {
   
    return (

    <div className="ItemListContainer">
        
        <h1>Productos</h1> <br/>


        <div className="catalogo" style={{backgroundColor: "#c2c2c2", height:"200px", width:"200px", marginLeft:"auto", marginRight:"auto"}}>
       
            <p>Ejemplo de producto</p>

            <input type="number" min="1"  defaultValue="1"></input> <br/>
            <button onClick={onAdd}>Agregar al carrito </button> 
          
        </div>
    </div>
)
}