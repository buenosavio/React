import React from 'react'
import { Link } from 'react-router-dom';
import List from './List';
import Style from '../components/Styles.module.css'

const Menu = () => {
    return (
    <div>
        <nav>
            <ul className={Style.list}>                         
                <List link="/" value="About me"/>                 
                <List link="/repos" value="My Projects"/>                 
                <List link="/contact" value="Contact"/>                 
            </ul>            
        </nav>
    </div>
    )
}

export default Menu;