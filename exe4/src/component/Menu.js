import { useNavigate } from "react-router-dom"

const Menu = () => {

    const navigate = useNavigate();

    const isLogged = () => {
        const loginOk = localStorage.getItem('token')
        return(loginOk)
    }

    const navigateFunction = (page) => {
        navigate(`/${page}`)
    }

    return (
        <nav>
            <ul> 
                {isLogged() 
                ? 
                (<>
                    <a onClick={() => {navigateFunction('')}}><li>Home</li></a>
                    <a onClick={() => {navigateFunction('user')}}><li>User</li></a>
                </>) 
                : <a href="/login"><li>Login</li></a>
                }
            </ul>
        </nav>
    )
}

export default Menu;