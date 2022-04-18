import React from 'react'
import notFound from '../../../Images/pageNotFound/404.png'
const PageNotFound = () => {
  return (
    <div className=' vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
      <img src={notFound} className='w-50' alt="" />
      <h1 className='text-secondary pt-5'>PAGE NOT FOUND!</h1>
    </div>
  )
}

export default PageNotFound