import { useState } from 'react';
import styless from '../styles.module.css'

const Links = ({link1, link2, link3}) => {

    return (
        <>
        <ul className={styless.linkHeader}>
            <a href="#"><li className={styless.padinzin}>{link1}</li></a>
            <a href="#"><li className={styless.padinzin}>{link2}</li></a>
            <a href="#"><li className={styless.padinzin}>{link3}</li></a>
        </ul>
        </>
    )
}

export default Links;