import { useContext } from "react";
import { LoginContext } from "./LoginContext";

const Header = () => {
    
    const {FazerLogoff} = useContext(LoginContext)
    
    return(
        <div>
            <button onClick={() => FazerLogoff()}>Logoff</button>
        </div>
    )
}

export default Header;