import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Service = (props) => {
  const { id, name, price, img, places, duration, desc } = props.service;
  return (
    <div className="col">
      <Card
        style={{ borderRadius: "15px" }}
        className="col-12 col-lg-12 shadow h-100"
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
          <Card.Title className="text-secondary fw-bold">
            PRICE:<span className="text-primary ps-2">{price}</span>
          </Card.Title>
          <Button
            as={Link}
            to={`checkout/${id}`}
            variant="primary"
            className="rounded-pill w-100"
          >
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
