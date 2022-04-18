import React from 'react'

const Review = (props) => {
    const {name,review,img}=props.review;
    return (
        <div className='col '>
            <div className=' p-4 border rounded h-100 w-100 bg-light shadow d-flex flex-column align-items-center '>
                
                <img src={img} style={{height:"100px",width:"100px"}} className='rounded-circle' alt="" />
                <span className='fw-bold text-primary pt-2'>{name}</span>
                <hr className='w-50' /> 
                <i style={{textAlign:"justify"}} className=' fw-bold'>"{review}"</i>
                
            </div>
        </div>
  )
}

export default Review