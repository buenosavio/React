import { createContext, useState } from "react";
import { api } from "../api";


export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getPeople = async () => {        
        try {
            const {data} = await api.get('/pessoa')
            setData(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }
    }

    return (
        <UserContext.Provider value={{getPeople, loading, setLoading, error, setError, data, setData}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;