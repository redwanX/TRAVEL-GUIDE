import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Service = (props) => 
{
    const {id,name,price,img,places} = props.service;
  return (
      <div className='col'>
          <Card style={{borderRadius:"15px"}} className='col-12 col-lg-11 shadow h-100' >
            <Card.Img variant="top" style={{borderRadius:"15px 15px 0 0"}} src={img} />
            <Card.Body>
                <Card.Title className='fw-bolder fs-3 text-primary text-lg-start text-center'>{name}</Card.Title>
                <hr />
                <Card.Text className='text-secondary'>
                    <span className='d-block text-secondary fs-4 fw-bold p-0 m-0'>Description:</span>
                    <span className='d-block p-0 m-0'>I will Manage Hotels, Resorts, Transports, Tickets and other required things for tourist places.</span>
                    <span className='d-block p-0 m-0 fw-bold'>Places We Will Cover:</span>
                    {places.map((place,i)=><li key={i}>{place}</li>)}
                    <li>Others</li>
                </Card.Text>
                <Card.Title className='text-secondary fw-bold'>MY CHARGE:<span className='text-primary ps-2'>{price}</span></Card.Title>
                <Button as={Link} to={`checkout/${id}`} variant="primary" className='rounded-pill w-100'>Checkout</Button>
            </Card.Body>
</Card>
      </div>
  )
}

export default Service