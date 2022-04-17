import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className='footer bg-primary text-light'>
            ©{new Date().getFullYear()}. All rights reserved. 
        </div>
    </div>
  )
}

export default Footer