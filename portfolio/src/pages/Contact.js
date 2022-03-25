import Style from '../components/Styles.module.css'
import Input from '../components/Input';

const Contact = () => {
    return (       
        <>
        <h2 className={Style.center}>Contact me...</h2>
        <div className={Style.form}>
            <Input type="text" placeholder="  Your name" />
            <Input type="mail" placeholder="  Your best e-mail" />
            <textarea name="msg" cols="30" rows="10" placeholder="  How can I help you?"></textarea>
            <button>Submit</button>
        </div>
        </>
    )
}

export default Contact;