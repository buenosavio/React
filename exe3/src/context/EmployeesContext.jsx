import { createContext, useState } from "react";

export const EmployeesContext = createContext();

const EmployeesProvider = ({children}) => {
    const [listEmployees, setListEmployees] = useState([])
    const [id, setId] = useState(1)
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [carrer, setCarrer] = useState('')

    return(
        <EmployeesContext.Provider value={{name, setName, mail, setMail, carrer, setCarrer, listEmployees, setListEmployees, id, setId}}>
            {children}
        </EmployeesContext.Provider>
    )
}

export default EmployeesProvider;