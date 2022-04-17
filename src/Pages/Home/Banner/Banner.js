import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import banner from '../../../Images/banner/banner.png'
import './Banner.css'
const Banner = () => {
  return (
     <div className='banner-bg'>
        <div className='mt-3 container-lg d-flex flex-lg-row flex-column-reverse
    text-center text-lg-start align-items-center  justify-content-around '>
      <div className='w-100 bg-white'>
        <h1 className='p-0 m-0 fw-bold text-secondary'>HELLO!</h1>
        <h1 className='p-0 m-0 lh-1 text-secondary fw-bolder display-1' >I'M <span className='text-primary'>ALEX</span></h1>
        <h1 className='p-0 m-0 fw-bold text-secondary'>YOUR TRAVEL GUIDE!</h1>
        <p className='text-justify'>I'm one of the best travel guide of Indonesia. I have 1000+ client,Whose are happy with my services! Are you ready for Your next destination with me?</p>
        <Button href='#services' className=' btn btn-primary px-5 py-2 fw-bold shadow-sm rounded-pill'>Services</Button>
      </div>
      <div className="col col-10 col-lg-6 mx-auto">
      <img className='w-100' src={banner} alt="" />
      </div>
    </div> 
     </div>
   
  )
}

export default Banner