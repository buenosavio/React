import React from 'react'
import { Link } from 'react-router-dom';

const List = ({link, value}) => {
    return (
        <li>
            <Link to={link}> {value} </Link>
        </li>
    )
}

export default List;