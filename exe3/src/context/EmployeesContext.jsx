import { createContext, useState } from "react";

export const EmployeesContext = createContext();

const EmployeesProvider = ({children}) => {
    const [listEmployees, setListEmployees] = useState([])
    const [id, setId] = useState(1)
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [carrer, setCarrer] = useState('')
    const [btnMain, setBtnMain] = useState('Cadastrar')

    return(
        <EmployeesContext.Provider value={{name, setName, mail, setMail, carrer, setCarrer, listEmployees, setListEmployees, id, setId, btnMain, setBtnMain}}>
            {children}
        </EmployeesContext.Provider>
    )
}

export default EmployeesProvider;