import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className='footer bg-dark text-light'>
           <h3>ALEX - TRAVEL GUIDE</h3> 
            <p className='text-secondary'> ©{new Date().getFullYear()}.Alex - Travel Guide. All rights reserved.</p>
            
        </div>
    </div>
  )
}

export default Footer