import { useContext } from "react";
import { Formik, Field, Form } from 'formik';
import { LoginContext } from "../context/LoginContext";
import Menu from "../component/Menu";

const Login = () => {
    const {FazerLogin} = useContext(LoginContext)
    return (
        <>
        <Menu />
        <Formik
            initialValues={{
                usuario: '',
                senha: ''
            }}
            onSubmit={(values) => FazerLogin(values)}
        >   
            <Form>
                <label htmlFor="usuario">Usuario</label>
                <Field id="usuario" name='usuario' placeholder="Digite seu usuário" />

                <label htmlFor="senha">Senha</label>
                <Field id="senha" name='senha' placeholder="Digite sua senha" />

                <button type="submit">Login</button>
            </Form>
        </Formik>
        </>
    )
}

export default Login;