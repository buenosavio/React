import {useState} from 'react';
import styles from '../styles.module.css'

const Form = () => {
    
    const ContatoEmpresa = (e) => {
        e.preventDefault();
        console.log(`seu login e ${nome}, senha ${email} e a mensagme é ${msg} opcao selecionada ${option}`);
    }
    
    const [nome, setNome] = useState('');
    const [email, setMail] = useState('');
    const [msg, setMsg] = useState('');
    const [option, setOption] = useState('')

    console.log(nome, email, msg, option)
    return (
        <>
        <form onSubmit={ContatoEmpresa} className={styles.form}>
            <div className={styles.input}>
                <input type="text" placeholder="Digite seu nome" value={nome} 
                onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div className={styles.input}>
                <input type="email" placeholder="Informe seu melhor e-mail" value={email} 
                onChange={(e) => setMail(e.target.value)}/>
            </div>
            <div className={styles.input}>
                <select name="contatoMotivo" value={option} onChange={(e) => setMsg(e.target.value)}>
                    <option value="option-1"> Quero participar do programa</option>
                    <option value="option-2"> Gostaria de mais informações</option>
                    <option value="option-3"> Outras dúvidas</option>
                </select>
            </div>
            <div className={styles.input}>
                <textarea name="mensagem" placeholder="Digite sua mensagem aqui" value={msg}
                onChange={(e) => setOption(e.target.value)}/>                
            </div>
            <div className={styles.input}>
            <input type="submit" value="Enviar" />
            </div>
        </form>
        </>
    )
}

export default Form;