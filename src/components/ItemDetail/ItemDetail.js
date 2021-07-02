

export const ItemDetail = ({item}) => {

console.log(item)

   


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
        
    </div> 
    </>
 )


}