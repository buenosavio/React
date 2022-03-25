import Style from '../components/Styles.module.css'
import Input from '../components/Input';
import { useState } from 'react';

const Contact = () => {

    const sendMail=(event)=>{
        event.preventDefault();
        (name && email && text) ? console.log(`nome: ${name} email: ${email} text: ${text}`) : alert('Informe os campos corretamente!')};            

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    return (       
        <>
        <h2 className={Style.center}>Contact me...</h2>
        <form onSubmit={sendMail} className={Style.form}>
            <Input type="text" placeholder="  Informe seu nome" value={name} method={setName}/>
            <Input type="mail" placeholder="  Informe seu e-mail" value={email} method={setEmail}/>
            <textarea name="msg" cols="30" rows="10" placeholder=" Digite sua mensagem" value={text} onChange={(char) => setText(char.target.value)}></textarea>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default Contact;