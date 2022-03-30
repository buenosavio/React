import Header from "../component/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import moment from "moment";

const User = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    
    useEffect(()=>{
        const loginOk = localStorage.getItem('token')
        if (!loginOk) {
            navigate('/login')
        }
        getPeople(); 
    },[])

    const getPeople = async () => {        
            try {
                const {data} = await api.get('/pessoa', { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwZXNzb2EtYXBpIiwic3ViIjoiMiIsImlhdCI6MTY0ODYwMTk1MywiZXhwIjoxNjQ4Njg4MzUzfQ.xmWjbe1kKCtJMSnRRPRvxz0ya5XAOcgvc6Q-Y7bGQvk' } })
                setData(data)
            } catch (error) {
                console.log(error)
            }
    }

    return (
    <>
        <Header/>
        <h1> User </h1>
        
            {data.map((people) => (
                <div key={people.idPessoa}>
                    <h3>{people.nome}</h3>
                    <p>Nascimento: {moment(people.dataNascimento).format('DD/MM/YYYY') }</p>
                    <p>CPF: {people.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
                    <p>{people.email}</p>
                </div>
            ))}        
        
    </>    
    )
}

export default User;