import {CartWidget} from "../CartWidget/CartWidget"
import '../navBar/navBar.css'

export const NavBar = ()=> {
 return (  <nav className="barra">
        
            <p>Casa Fenix</p>
            <p><a href="" >Inicio</a></p>
            <p><a href="">Productos</a></p>
            <p><a href="">Quienes somos</a></p>
            <p><a href="">Contacto</a></p>
            
            
            <CartWidget/>
            
    </nav>
 )


}