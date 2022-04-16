import React from 'react'
import banner from '../../../Images/banner/banner.png'
const Banner = () => {
  return (
    <div className=' flex '>
      <div>
        <h1>Hello!</h1>
        <h1 className=' text-blue-500 ' >I'm ALEX</h1>
        <p>YOUR TRAVEL GUIDE</p>
      </div>
      <img src={banner} alt="" />
    </div> 
  )
}

export default Banner