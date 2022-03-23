import Logo from './Logo'
import Links from './Links'
import styles from '../styles.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
        <Logo/>
        <Links link1="Home" link2="Sobre" link3="Contato"/>
        </div>
        
    );
}

export default Header;

