import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Menu from "./Menu";

const Header = () => {
    
    const {FazerLogoff} = useContext(LoginContext)

    return(
        <div>
            <Menu />
            <button onClick={() => FazerLogoff()}>Logoff</button>
        </div>
    )
}

export default Header;