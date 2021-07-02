import {CartWidget} from "../CartWidget/CartWidget"
import '../navBar/navBar.css'
import {Link} from 'react-router-dom'


export const NavBar = ()=> {
 return (  <nav className="barra">
        
            <p>Casa Fenix</p>
<Link to='/'> <p><a href="" >Inicio</a></p></Link>
<Link to='/products'><p><a href="">Productos</a></p></Link>
<Link><p><a href="">Quienes somos</a></p></Link>
<Link> <p><a href="">Contacto</a></p></Link>
     
            <CartWidget/>
            
    </nav>
 )


}