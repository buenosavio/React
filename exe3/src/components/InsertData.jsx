import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";
import Style from './Style.module.css'

const InsertData = () => {
    const {id, setId} = useContext(EmployeesContext);
    const {name, setName} = useContext(EmployeesContext);
    const {mail, setMail} = useContext(EmployeesContext);
    const {carrer, setCarrer} = useContext(EmployeesContext);
    const {listEmployees, setListEmployees} = useContext(EmployeesContext);
    const {btnMain, setBtnMain} = useContext(EmployeesContext);

    const validName = (name) => {
        var re = /^[a-zA-Z ]{2,30}$/;
        return re.test(name);
    }

    const validMail = (email) => {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    const InsertEmployee = () => { 
        if ( validMail(mail) && validName(name) && carrer) {
            if (listEmployees.some(e => {return e.id === id})) {
                let updatedEmployee = listEmployees.find(e => {return e.id === id})
                updatedEmployee.name = name;
                updatedEmployee.mail = mail;
                updatedEmployee.carrer = carrer
                setListEmployees(listEmployees)
                ClearInput()
            } else {
                setId(id+1)
                listEmployees.push({id, name, mail, carrer})   
                setListEmployees(listEmployees)
                ClearInput()
            }
        } else {
            alert('Dados inválidos!')
        }
    }

    const ClearInput = () => {        
        setName('');      
        setMail('');
        setCarrer('');
        setBtnMain('Cadastrar')
    }
    
    return(
        <div className={Style.form}>
            <input type="text" placeholder="Informe o nome" onChange={(char) => setName(char.target.value)} value={name}/>
            <input type="text" placeholder="Informe o e-mail" onChange={(char) => setMail(char.target.value)} value={mail}/>
            <input type="text" placeholder="Informe a profissão" onChange={(char) => setCarrer(char.target.value)} value={carrer}/>
            <button type="submit" onClick={() => InsertEmployee()}> {btnMain} </button> 
        </div>
    )
}

export default InsertData;