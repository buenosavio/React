import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import Header from "../component/Header";
import moment from "moment";
import Footer from "../component/Footer";
import Loading from "../component/loading/Loading";
import Error from "../component/error/Error";
import Style from '../pages/Style.module.css'
import imgContact from '../component/img/contato.svg'

const User = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(()=>{
        const loginOk = localStorage.getItem('token')
        if (!loginOk) {
            navigate('/login')
        }
        getPeople(); 

    },[])

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

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    return (
    <>
        <Header/>
        <h1> Usuários </h1>
            {data.map((people) => (
                <div className={Style.card}>
                <div>
                    <img src={imgContact} alt="" className={Style.img}/>
                </div>
                <div key={people.idPessoa} >
                    <h3>{people.nome}</h3>
                    <p>Nascimento: {moment(people.dataNascimento).format('DD/MM/YYYY') }</p>
                    <p>CPF: {people.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
                    <p>{people.email}</p>
                </div>
                </div>
            ))}        
        <Footer/>
    </>    
    )
}

export default User;