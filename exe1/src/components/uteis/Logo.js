import logo from '../../images/cogumelo-logo.png'
import style from '../styles.module.css'

const Logo = () => {
    return (
        <div className={style.logoHeader}> 
            <a href="https://www.dbc.com"><img src={logo} alt="imagem do mario" /></a>
            <h1> Site do Mario </h1>
        </div>    
    )
}
export default Logo;