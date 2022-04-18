import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
const Review = (props) => {
    const {name,review,img,rating}=props.review;
    return (
        <div className='col '>
            <div style={{ borderRadius: "15px" }} className=' p-5 border h-100 w-100 bg-light shadow d-flex flex-column align-items-center '>
                
                <img src={img} style={{height:"100px",width:"100px"}} className='rounded-circle' alt="" />
                <span className='fw-bold text-primary pt-2'>{name}</span>
                <hr className='mb-0 w-50' /> 
                
                <div style={{ borderRadius: "15px" }} className='m-0 p-0 text-dark w-100'>
                    <div className='d-flex justify-content-center'>
                    <StarIcon className='m-0 p-0' style={{height:"30px"}}/>
                    <h3 className='my-0 py-0 text-center'>{rating}</h3>    
                    </div>
                </div>
                <hr className='w-50 mt-0' />
                

                <i style={{textAlign:"justify"}} className=' fw-bold text-secondary'>"{review}"</i>
                
            </div>
        </div>
  )
}

export default Review