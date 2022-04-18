import React, { useEffect, useState } from 'react'
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useServices();
  return (
    
    <div id='services' className='container mb-5 h-100'>
        <h1 className='text-center fw-bold text-secondary'>MY SERVICES</h1>
        <hr />
        <div className='row row-cols-1 row-cols-lg-3 g-4'>
        {services.map((service)=><Service key={service.id} service={service}></Service>)}
        </div>
    </div>

  )
}

export default Services