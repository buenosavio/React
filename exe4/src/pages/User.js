import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { api } from "../api";
import Header from "../component/Header";
import moment from "moment";
import Footer from "../component/Footer";
import Loading from "../component/loading/Loading";
import Error from "../component/error/Error";
import Style from '../pages/Style.module.css'
import imgContact from '../component/img/contato.svg'
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

const User = () => {
    const navigate = useNavigate()
    const {loading, error, getPeople, data} = useContext(UserContext)
    
    useEffect(()=>{
        const loginOk = localStorage.getItem('token')
        if (!loginOk) {
            navigate('/login')
        }
        getPeople(); 

    },[])

    const handleDelete = async (idPessoa) => {
        confirmAlert({
            title: 'Confirmar',
            message: 'Tem certeza que deseja excluir?',
            buttons: [
                {
                    label:'Sim',
                    onClick: async () => {
                        try {
                            await api.delete(`/pessoa/${idPessoa}`)
                            console.log('idPessoa deletada: ', idPessoa)
                            getPeople(); 
                        } catch (error) {
                            console.log(error)
                        }
                    }
                },
                {
                    label:'Não',
                }
            ]
        })
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
        <Link to='/create-user'><button className={Style.btnCadastro}>Cadastrar</button></Link>
            {data.map((people) => (
                <div className={Style.card} key={people.idPessoa}>
                <div>
                    <img src={imgContact} alt="" className={Style.img}/>
                </div>
                <div >
                    <h3>{people.nome}</h3>
                    <p>Nascimento: {moment(people.dataNascimento).format('DD/MM/YYYY') }</p>
                    <p>CPF: {people.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
                    <p>{people.email}</p>
                    <button onClick={() => handleDelete(people.idPessoa)} className={Style.btnDelete} >Deletar</button>                    
                    <button onClick={() => navigate(`/create-user/${people.idPessoa}`)} className={Style.btnAtz}>Atualizar</button>
                </div>
                </div>
            ))}        
        <Footer/>
    </>    
    )
}

export default User;