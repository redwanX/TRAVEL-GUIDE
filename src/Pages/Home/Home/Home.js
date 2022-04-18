import React from 'react'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import Reviews from '../Reviews/Reviews'
const Home = () => {
  return (
    <div style={{minHeight: 'calc(100vh - 142px - 72px)'}}>
      <Banner></Banner>
      <Services></Services>
      <Reviews></Reviews>
    </div>
  )
}

export default Home