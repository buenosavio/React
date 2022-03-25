import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Style from '../components/Styles.module.css'

const Social = () => {
    return (       
        <div>
            <a href="https://instagram.com/buenosavio"><FaInstagram href="https://instagram.com/buenosavio" className={Style.icon}/></a>
            <a href="https://www.linkedin.com/in/buenosavio/"><FaLinkedin href="https://instagram.com/buenosavio" className={Style.icon}/></a>
            <a href="mailto:souzasavio@outlook.com"><FiMail href="https://instagram.com/buenosavio" className={Style.icon}/></a>
        </div>
    )
}

export default Social;