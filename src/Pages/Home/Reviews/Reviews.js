import React, { useEffect, useState } from 'react'
import Review from '../Review/Review';
const Reviews = () => {
  const [reviews,setReviews] = useState([])
  useEffect(()=>{
    fetch('review.json')
        .then(res => res.json())
        .then (data => setReviews(data));

  },[]);
  return (
    <div id='reviews' className='container mb-5 h-100'>
        <h1 className='text-center fw-bold text-secondary'>TOP CUSTOMER REVIEWS</h1>
        <hr />
        <div className='row row-cols-1 row-cols-lg-3 g-4'>
        {reviews.map((review)=><Review key={review.id} review={review}></Review>)}
        </div>
    </div>
  )
}

export default Reviews