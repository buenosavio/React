import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Menu from "./Menu";

const Header = () => {
    
    const {FazerLogoff} = useContext(LoginContext)

    return(
        <header>
            <Menu />
            <button onClick={() => FazerLogoff()}>Logoff</button>
        </header>
    )
}

export default Header;