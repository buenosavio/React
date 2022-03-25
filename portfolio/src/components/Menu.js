import React from 'react'
import { Link } from 'react-router-dom';
import List from './List';
import Style from '../components/Styles.module.css'
import Social from './Social'

const Menu = () => {
    return (
    <div>
        <nav>
            <ul className={Style.list}> 
                <div>
                    <List link="/" value="About me"/>                 
                    <List link="/repos" value="Projects"/>                 
                    <List link="/contact" value="Contact"/>                     
                </div>                  
                <div>
                    <Social/>                
                </div>
            </ul>            
        </nav>
    </div>
    )
}

export default Menu;