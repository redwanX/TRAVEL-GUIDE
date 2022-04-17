import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => 
{
    const {id,name,price,img,places} = props.service;
  return (
      <div>
          <Card className='cardRadius col-12 col-lg-11 shadow h-100' >
            <Card.Img className='cardImg' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='fw-bolder fs-3 text-primary text-lg-start text-center'>{name}</Card.Title>
                <hr />
                <Card.Text className='text-secondary'>
                    <p className='text-secondary fs-4 fw-bold p-0 m-0'>Description:</p>
                    <p className='p-0 m-0'>I will Manage Hotels, Resorts, Transports, Tickets and other required things for tourist places.</p>
                    <p className='p-0 m-0 fw-bold'>Places We Will Cover:</p>
                    {places.map(place=><li>{place}</li>)}
                    <li>Others</li>
                </Card.Text>
                <Card.Title className='text-secondary fw-bold'>MY CHARGE:<span className='text-primary ps-2'>{price}</span></Card.Title>
                <Button as={Link} to={`checkout/${id}`} variant="primary" className='cardButton w-100'>Checkout</Button>
            </Card.Body>
</Card>
      </div>
  )
}

export default Service