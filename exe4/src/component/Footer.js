import Menu from "./Menu";
import Style from '../pages/Style.module.css'

const Footer = () => {

    return(
        <footer className={Style.footer}>
            <Menu />
            <small>Copyright: Vem ser DBC</small>
        </footer>
    )
}

export default Footer;