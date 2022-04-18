import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useServices from "../../Hooks/useServices";

const Checkout = () => {
  const [services, setServices] = useServices();
  const [service, setService] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const selected = services.find((s) => s.id === parseInt(id));
    setService(selected);
  }, [services]);
  const { name, price, img, places, duration, desc } = service ? service : {};
  const navigate = useNavigate();
  const showthanks = (e) => {
    e.preventDefault();
    toast("Thanks For Booking");
    navigate("/");
  };

  return (
    <div style={{minHeight: 'calc(100vh - 142px - 72px)'}} className="container">
      <h1 className="text-center mt-5 fw-bolder text-primary">CHECK OUT</h1>
      <hr />
      <div className="row row-cols-1 mb-5 row-cols-lg-2 g-4">
      <div className="col">
      <Card
        style={{ borderRadius: "15px" }}
        className="col-12 shadow h-100"
      >
        <h4 className="text-center mt-5 fw-bolder text-primary">PLEASE FILL THIS FORM FOR CHECKOUT</h4>
         <Form className=' p-5' onSubmit={showthanks}>
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
              <Form.Group className="my-3" controlId="formBasicAddress">
                  <textarea className="form-control" placeholder="Extra Requirenments" rows="5"></textarea>
              </Form.Group>
              <Button variant="primary" type="submit" className='rounded-lg py-3 w-100'>
                Submit
              </Button>
            </Form>
      </Card>
    </div>
    <div className="col">
      <Card
        style={{ borderRadius: "15px" }}
        className="col-12 shadow h-100"
      >
        <Card.Img
          variant="top"
          style={{ borderRadius: "15px 15px 0 0" }}
          src={img}
        />
        <Card.Body>
          <Card.Title className="fw-bolder fs-3 text-primary text-lg-start text-center">
            {name}
          </Card.Title>
          <hr />
          <Card.Title className="text-secondary fw-bold fs-1">
            PRICE:<span className="text-primary ps-2">{price}</span>
          </Card.Title>
          <Card.Text className="text-secondary pb-0 mb-0">
            <span className="d-block text-secondary fs-4 fw-bold p-0 m-0">
              Description:
            </span>
            <span
              style={{ textAlign: "justify" }}
              className="d-block p-0 m-0 text-justify"
            >
              {desc} I will Manage Hotels, Resorts, Transports, Tickets and
              other required things for you.
            </span>
            <span className="d-block p-0 m-0 fw-bold">
              Duration: <span className="text-primary">{duration} Days</span>
            </span>
          </Card.Text>
          <div className="text-secondary py-0 my-0">
            <span className="d-block p-0 m-0 fw-bold">
              Places We Will Cover:
            </span>
            <ul>
              {places && places.map((place, i) => <li key={i}>{place}</li>)}
              <li>Others</li>
            </ul>
          </div>
         
        
        </Card.Body>
      </Card>
    </div>
      
      </div>
    </div>
  );
};

export default Checkout;
