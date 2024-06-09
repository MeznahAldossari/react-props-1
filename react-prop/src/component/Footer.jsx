import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div>
      <div className='footer'>
      <p style={{color:'white'}} className='pFooter'>  &copy; {new Date().getFullYear()} All rights reserved. Created by Meznah Aldossari</p>
      </div>
    </div>
  )
}

export default Footer
