import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useServices from '../../Hooks/useServices';

const Checkout = () => {
  const [services,setServices]=useServices();
  const [service,setService] =useState({});
  const {id}=useParams();
  useEffect(()=>{
    const selected=services.find((s)=>s.id===parseInt(id));
    setService(selected);
  },[services]);

  const navigate= useNavigate();
  const showthanks=(e)=>{
    e.preventDefault();
    toast('Thanks For Booking');
    navigate('/');
  }

  return (
    <div>
            <div className='my-5 col col-lg-6 col-12 mx-auto'>
          
            <h3 className='text-primary fw-bold text-center'>Please Fill This Form For Check Out</h3>
            <Form className='my-5 ' onSubmit={showthanks}>
              <Form.Group className="my-3" controlId="formBasicName">
                
                <Form.Control type="text" placeholder="Name" required/>
              </Form.Group>
              <Form.Group className="my-3" controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Email" required/>
              </Form.Group>
              <Form.Group className="my-3" controlId="formBasicNumber">
                
                <Form.Control type="number" placeholder="Phone Number" required/>
              </Form.Group>
              <Form.Group className="my-3" controlId="formBasicAddress">
                
                <Form.Control type="text" placeholder="Address" required />
              </Form.Group>
              <Button variant="primary" type="submit" className='rounded-lg py-3 w-100'>
                Submit
              </Button>
            </Form>
            <div className='text-secondary'>
              <h3>Service Name: <span className='text-primary'>{service&&service.name}</span></h3>
              <h3>Total Price: <span className='text-primary'>{service&&service.price}</span></h3>
            </div>
            </div>
    </div>
  )
}

export default Checkout