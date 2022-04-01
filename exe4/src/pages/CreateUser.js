import { toast, ToastContainer } from 'react-toastify';
import { Formik, Field, Form } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../api';
import { UserContext } from '../context/UserContext';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Loading from '../component/loading/Loading';
import Style from './Style.module.css';
import 'react-toastify/dist/ReactToastify.min.css'; 

function CreateUser() {

    const [btn, setBtn] = useState('')
    const [tituloUser, setTituloUser] = useState('')
    const [styleBtn, setStyleBtn] = useState('')
    const {loading, setLoading} = useContext(UserContext)
    const [dataToUpdate, setDataToUpdate] = useState({})

    const location = useLocation();
    const idToUpdate = (location.pathname.substring(13,20)) 

    const updatePerson = async () => {
        const {data} = await api.get(`/pessoa/{idPessoa}?idPessoa=${idToUpdate}`)
        setDataToUpdate(data);    
    }

    useEffect(() => {
        if (idToUpdate) {
            setBtn('Atualizar')
            setTituloUser('Atualizar Pessoa')
            setStyleBtn(Style.btnAtz)
            updatePerson()
        } else {
            setBtn('Cadastrar')
            setTituloUser('Cadastrar pessoa')
            setStyleBtn(Style.btnCadastro)
        }
    },[])

    const CreatePerson = async (values) => {

        if (!idToUpdate) {
            try {
                setLoading(true)
                const {data} = await api.post('/pessoa', values)
                console.log(data)
                toast.success("Usuário cadastrado com sucesso!", {
                    position: toast.POSITION.TOP_LEFT
                  });
                setLoading(false)
            
            } catch (error) {
                console.log('error:', error)
                toast.error("Erro ao cadastrar usuário!", {
                    position: toast.POSITION.TOP_LEFT
                  });   
            }
        } else {
            try {
                setLoading(true)
                await api.put(`/pessoa/${idToUpdate}`, values)
                toast.success("Usuário atualizado com sucesso!", {
                    position: toast.POSITION.TOP_LEFT
                  });
                  setLoading(false)
            } catch (error) {
                toast.error("Erro ao atualizar usuário!", {
                    position: toast.POSITION.TOP_LEFT
                  });   
            }
        }
    }

    if(loading) {
        return <Loading />
    }

  return (
      <>
    <ToastContainer />
    <Header />
        <h1>{tituloUser}</h1>
        <Formik
        initialValues={{
            cpf: dataToUpdate.cpf,
            dataNascimento: dataToUpdate.dataNascimento,
            email: dataToUpdate.email,
            nome: dataToUpdate.nome
        }}
        onSubmit={async (values) => {
            CreatePerson(values)
        }}
        >
            <Form>
                <div className={Style.createUser}>
                    <label htmlFor="nome">Nome</label>
                    <Field id="nome" name="nome" placeholder="Insira o nome"/>

                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="Insira o email" type="email"/>

                    <label htmlFor="dataNascimento">Data Nascimento</label>
                    <Field id="dataNascimento" name="dataNascimento" placeholder="Informe data de nascimento"/>
                    
                    <label htmlFor="cpf">CPF</label>
                    <Field id="cpf" name="cpf" placeholder="Informe cpf"/>
                    
                    <button type="submit" className={styleBtn}>{btn}</button>
                </div>
            </Form>
        </Formik>
    <Footer />
    </>
  )
}

export default CreateUser