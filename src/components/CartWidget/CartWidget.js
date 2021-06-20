import '../CartWidget/CartWidget.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export const CartWidget = ()=> {
    return (

    <div className="imagen" style= {{fontSize: '2x' , color:"black" }} >
        <a href="">
        <FontAwesomeIcon icon={faShoppingCart}/>
        </a>
        </div>
)
}