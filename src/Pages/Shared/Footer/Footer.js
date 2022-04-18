import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className='footer bg-dark text-light'>
           <h4>ALEX - TRAVEL GUIDE</h4> 
            <p className='text-xs text-secondary'> ©{new Date().getFullYear()} All rights reserved.</p>
            
        </div>
    </div>
  )
}

export default Footer