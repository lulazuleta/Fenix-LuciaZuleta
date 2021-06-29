import {Item} from "../Item/Item"


export const ItemList=({items})=> {

console.log(items)

return(

    <div>
    {items.map(item=><Item item={item}/>)}

    </div>
)


}