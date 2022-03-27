import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import Style from './Style.module.css'

const EmployeesList = () => {
    const {listEmployees,setListEmployees} = useContext(EmployeesContext)
    const {id, setId} = useContext(EmployeesContext);
    const {name, setName} = useContext(EmployeesContext);
    const {mail, setMail} = useContext(EmployeesContext);
    const {carrer, setCarrer} = useContext(EmployeesContext);

    const deleteEmployee = (id) => {
        setListEmployees(listEmployees.filter(e => {return e.id !== id})) 
    }

    const updateEmployee = (idE) => {
        const [{id, name, mail, carrer}] = listEmployees.filter(e => {return e.id === idE})        
        setId(id)
        setName(name)    
        setMail(mail)    
        setCarrer(carrer)   
    }
 
    return (
        <>
        {listEmployees.map(employee => 
            <div key={employee.id} className={Style.employee}>
                <p>{employee.name}</p>
                <p>{employee.mail}</p>
                <p>{employee.carrer}</p>
                <button onClick={ () => deleteEmployee(employee.id)}> Deletar </button>
                <button onClick={ () => updateEmployee(employee.id)}> Atualizar </button>
            </div>
        )}
        </>
    )
}

export default EmployeesList;