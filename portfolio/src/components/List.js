import React from 'react'
import { Link } from 'react-router-dom';
import Style from '../components/Styles.module.css'

const List = ({link, value}) => {
    return (
        <li>
            <button className={Style.cta}> 
            <span><Link to={link}> {value} </Link> </span> 
            {/* <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
            </svg> */}
            </button>
        </li>
    )
}

export default List;