import {Item} from "../Item/Item"


export const ItemList=({items})=> {

console.log(items)

return(

    <>
    {items.map(item=><Item item={item}/>)}
    </>
)


}