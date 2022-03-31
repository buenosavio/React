import { Link, useNavigate } from "react-router-dom"
import Style from '../pages/Style.module.css'

const Menu = () => {

    const navigate = useNavigate();

    const isLogged = () => {
        const loginOk = localStorage.getItem('token')
        return(loginOk)
    }

    return (
        <nav>
            <ul> 
                {isLogged() 
                ? 
                (<div>
                    <Link to='/'><li className={Style.li}>Home</li></Link>
                    <Link to='/user'><li className={Style.li}>User</li></Link>
                    <Link to='/address'><li className={Style.li}>Adress</li></Link>
                </div>) 
                :   <Link to='/login'><li className={Style.linkLogin}>Login</li></Link>
                }
            </ul>
        </nav>
    )
}

export default Menu;