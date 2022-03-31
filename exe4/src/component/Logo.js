import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../pages/Style.module.css'

function Logo() {
  return (
    <Link to='/' className={Style.logo}>Logo</Link>
  )
}

export default Logo