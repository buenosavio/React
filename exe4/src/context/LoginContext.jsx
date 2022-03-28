import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../api";

export const LoginContext = createContext();

const LoginProvider = ( {children} ) => {
    const [login, setLogin] = useState(false);
    const [token, setToken] = useState()
    const navigate = useNavigate()

    const FazerLogin = async (values) => {
        try {
            const {data} = await api.post('/auth', values)
            setToken(data)
            setLogin(true)
            localStorage.setItem('token',token)
            navigate("/user")

        } catch (error) {
            console.log(error) 
        }
    }

    const FazerLogoff = () => {
        setLogin(false)
        localStorage.removeItem('token')
        navigate("/login")
    }

    return (
        <LoginContext.Provider value={{FazerLogin, FazerLogoff}}>
         {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;

