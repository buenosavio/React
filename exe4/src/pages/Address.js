import { Form, Formik, Field } from 'formik'
import { useState } from 'react'
import axios from 'axios'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Style from './Style.module.css'
import * as Yup from 'yup';

const schema = Yup.object().shape({
    cep: Yup.string().required(),
    logradouro: Yup.string().required(),
    bairro: Yup.string().required(),
    cidade: Yup.string().required(),
    estado: Yup.string().required(),
    ddd: Yup.number().required(),
    telefone:Yup.number().required(),
})

function Address() {

    const [logradouro, setLogradouro] = useState('')
    const [cep, setCep] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [ddd, setDdd] = useState('')

    const FindCep = async (cep) => {
        const tamanho = cep.length
        if (tamanho === 8 ) {
            try {
                const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json`)  
                setCep(cep.replace(/([\d]{2})([\d]{3})([\d]{3})/,"$1.$2-$3"))        
                setLogradouro(data.logradouro) 
                setBairro(data.bairro)
                setCidade(data.localidade)
                setEstado(data.uf)
                setDdd(data.ddd)
            } catch (error) {
                console.log('error: ', error)
            }
        }
    }

    const saveAddress = (values) => {
        alert(`Dados salvos! \n 
            CEP ${values.cep} \n  
            logradouro ${values.logradouro} \n  
            complemento ${values.complemento} \n  
            bairro ${values.bairro} \n  
            cidade ${values.cidade} \n  
            estado ${values.estado} \n  
            ddd ${values.ddd} \n  
            telefone ${values.telefone} \n `
        )

        setCep('')        
        setLogradouro('') 
        setBairro('')
        setCidade('')
        setEstado('')
        setDdd('')
    }

  return (
    <>
        <Header/>
        <h1> Endereço </h1>
        <Formik
            validationSchema={schema}
            initialValues={{
                cep: cep,
                logradouro: logradouro,
                complemento: '',
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                ddd: ddd,
                telefone:''
            }}
            enableReinitialize={true}
            
            onSubmit={(values) => saveAddress(values)}
        >   
        {({errors}) => (
            <Form> 
                <div className={Style.address}>
                <label htmlFor="cep" >CEP</label>
                <Field id="cep" name='cep' placeholder="Informe o CEP" onBlur={(e) => FindCep(e.target.value) }/>      
                {errors.logradouro && (
                    <div className={Style.error}>Informe um CEP válido!</div>
                )}
                <label htmlFor="logradouro" >Endereço</label>
                <Field id="logradouro" name='logradouro' placeholder="Informe o endereco" value={logradouro}/>
                {errors.logradouro && (
                    <div className={Style.error}>Informe um endereço válido!</div>
                )}
                <label htmlFor="complemento" >Complemento</label>
                <Field id="complemento" name='complemento' placeholder="Informe complemento" />

                <label htmlFor="bairro" >Bairro</label>
                <Field id="bairro" name='bairro' placeholder="Informe o bairro" value={bairro}/>
                {errors.logradouro && (
                    <div className={Style.error}>Informe um bairro!</div>
                )}

                <label htmlFor="cidade" >Cidade</label>
                <Field id="cidade" name='cidade' placeholder="Informe a cidade" value={cidade}/>
                {errors.logradouro && (
                    <div className={Style.error}>Informe uma cidade!</div>
                )}

                <label htmlFor="estado" >Estado</label>
                <Field id="estado" name='estado' placeholder="Informe o estado" value={estado}/>
                {errors.logradouro && (
                    <div className={Style.error}>Informe um estado válido!</div>
                )}

                <label htmlFor="ddd" >DDD</label>
                <Field id="ddd" name='ddd' placeholder="Informe o ddd" value={ddd}/>
                {errors.logradouro && (
                    <div className={Style.error}>Informe um DDD válido!</div>
                )}

                <label htmlFor="telefone">Telefone</label>
                <Field id="telefone" name='telefone' placeholder="Digite seu telefone" />     
                {errors.telefone && (
                    <div className={Style.error}>Informe um telefone válido!</div>
                )} 
                </div>
                <button type='submit' className={Style.addressBtn}>Cadastrar</button>          
            </Form>
        )}
        </Formik>
        <Footer/>
    </>
  )
}

export default Address

// Cep, Rua, Complemento, Bairro, Cidade, Estado, DDD, Telefone
// busca pelo CEP
// retorna um alert informando se foi sucesso ou nao
// valida se todos os campos estão prenchidos
// traço autocompleta
// pode usar botão buscar cep