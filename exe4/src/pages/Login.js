import { useContext } from "react";
import { Formik, Field, Form } from 'formik';
import { LoginContext } from "../context/LoginContext";
import Footer from "../component/Footer";
import Style from './Style.module.css'
import Header from "../component/Header";

const Login = () => {
    const {FazerLogin} = useContext(LoginContext)
    return (
        <>
        <Header />
        <div className={Style.login}>
        <Formik
            initialValues={{
                usuario: '',
                senha: ''
            }}
            onSubmit={(values) => FazerLogin(values)}
        >   
            <Form className={Style.form}> 
                <label htmlFor="usuario" >Usuario</label>
                <Field id="usuario" name='usuario' placeholder="Digite seu usuário" />

                <label htmlFor="senha">Senha</label>
                <Field id="senha" name='senha' placeholder="Digite sua senha" />

                <button type="submit">Login</button>
            </Form>
        </Formik>
        </div>
        <Footer />
        </>
    )
}

export default Login;