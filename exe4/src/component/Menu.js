const Menu = () => {

    const isLogged = () => {
        const loginOk = localStorage.getItem('token')
        return(loginOk)
    }

    return (
        <nav>
            <ul>
                {isLogged() 
                ? 
                (<>
                    <a href="/"><li>Home</li></a>
                    <a href="/user"><li>User</li></a>
                </>) 
                : <a href="/login"><li>Login</li></a>
                }
            </ul>
        </nav>
    )
}

export default Menu;