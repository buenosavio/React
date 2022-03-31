import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Logo from "./Logo";
import Menu from "./Menu";
import Style from '../pages/Style.module.css'

const Header = () => {

    const isLogged = () => {
        const loginOk = localStorage.getItem('token')
        return(loginOk)
    }
    
    const {FazerLogoff} = useContext(LoginContext)

    return(
        <header className={Style.header}>
            <div>
                <Logo/>                
            </div>
            <div className={Style.header}>
                { isLogged() 
                    ? (<><Menu /><button onClick={() => FazerLogoff()}>Logoff</button></>) 
                    : <Menu />}                
            </div>
        </header>
    )
}

export default Header;