import React from 'react'
import logo from "../assets/moon.png"
import "./nav.css"

function Nav() {
  return (

    <div className='divNav'>
        <nav>
            <img src={logo} className='logo'/>
        </nav>
      
    </div>
  )
}

export default Nav
