import React from 'react'
import "./Navbar.css"
import { LinksData } from '../../../data'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='navbar__container'>
    <h1>LOGO HERE</h1>
    <div className='links'>
        {
        LinksData.map((link) => (
            <Link to={link.linkTo} key={link.linkText}>{link.linkText}</Link>
        )
        )
}
    </div>

    </div>
  )
}

export default Navbar