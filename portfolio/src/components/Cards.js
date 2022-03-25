import Styles from '../components/Styles.module.css'

const Cards = ({reposName, description, language, url}) => {
    return (        
        <li className={Styles.itens}>
            <img src="https://t.ctcdn.com.br/fJaOJW5dCLC74v-crGtpLsWolzk=/1260x709/smart/filters:format(webp)/i491384.jpeg" alt=""/>
            <div>  
                <h3><a href={url}  className={Styles.colorLink}>{reposName}</a></h3>  
                <p>{description}</p>
                <p className={Styles.colorText}>{language}</p>               
            </div>
        </li>
    )
}

export default Cards;