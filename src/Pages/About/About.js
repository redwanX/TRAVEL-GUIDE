import React from 'react'
import profile from '../../Images/profile/profile.jpg'
const About = () => {
  return (
    <div style={{minHeight: 'calc(100vh - 142px - 72px)'}} className='my-5 container w-100'>
      <div className='d-flex flex-column justify-content-center  align-items-center'>
      <img src={profile} className='w-25 mx-auto rounded-circle border border-primary' alt="" />
      <h1 className='text-primary mt-4 fw-bolder'>MD. REDWAN AHMED</h1>
      </div>
      <hr className='w-50 mx-auto' />
      <div className='p-5 shadow rounded-lg' style={{textAlign:'justify'}}>
      <h3 className='text-primary'>MY GOAL AND HOW WILL I WORK TO ACHIEVE IT:</h3>
      <article className='fw-bold pt-5 '>
          My Goal is to be a full stack web developer . I'm focusing on MERN stack and at this moment I'm Learning React Js. I will start Learning Backend Development with Node Js, Express Js and Mongo DB after completing React Js. I Like to write code effeciently which helps me to learn coding things deeply.
      </article>
      </div>
    </div>
  )
}

export default About