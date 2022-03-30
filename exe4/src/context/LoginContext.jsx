import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export const LoginContext = createContext();

const LoginProvider = ( {children} ) => {
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    const FazerLogin = async (values) => {
        try {
            const {data} = await api.post('/auth', values)
            setToken(data)
            localStorage.setItem('token',token)      
            navigate("/")
            api.defaults.headers.common['Authorization'] = data            
        } catch (error) {
            console.log(error) 
        }
    }

    const FazerLogoff = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

    return (
        <LoginContext.Provider value={{FazerLogin, FazerLogoff, token, setToken}}>
         {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;

