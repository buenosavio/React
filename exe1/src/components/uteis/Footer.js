import styles from '../styles.module.css'
import Links from './Links'
const Footer = () => {
    return (
        <div className={styles.header}>
        <address>Tv. São José, 455 - Navegantes, Porto Alegre - RS, 90240-200</address>
        <Links link1="Home" link2="Sobre" link3="Contato"/>
        </div>        
    );
}

export default Footer;