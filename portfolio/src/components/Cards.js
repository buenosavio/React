import Styles from '../components/Styles.module.css'

const Cards = ({id, reposName, description, language, url}) => {
    return (        
        <li key={id} className={Styles.itens}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png" alt=""/>
            <div>  
                <h3><a href={url}>{reposName}</a></h3>  
                <p>{description}</p>
                <p>{language}</p>               
            </div>
        </li>
        
    )
}

export default Cards;