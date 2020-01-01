import React, { useState } from "react";

import Container from "react-bootstrap/Container";

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import Image from "react-bootstrap/Image"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import StarRatingComponent from 'react-star-rating-component';


import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

const App = () => (
  <Container>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>

    <Row class="header_image">
      <Image src="images/beers.jpg" className="header_image"/>
    </Row>

    <Row>
      <Col>
        <Card className="beerTaps">
          <Card.Img variant="top" src="images/strawberries.jpg" />
          <Card.Body>
            <Card.Title>StrawBEERy Fields</Card.Title>            
            <Card.Subtitle>Cream Ale - 5.5% ABV</Card.Subtitle>
            <Card.Text>
              Cream Ale brewed with Lactose and Strawberries.
            </Card.Text>
            <Card.Text>
                <StarRatingComponent 
                  name="rate2" 
                  editing={false}
                  starCount={5}
                  starColor="blue"
                  value={4}
                />
              </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="images/sharkelberry.jpg" />
          <Card.Body>
            <Card.Title>Shark Attack</Card.Title>
            <Card.Subtitle>Lemon Wine - 11% ABV</Card.Subtitle>
            <Card.Text>
              Lemon Wine flavored with your childhood favorite Kool-Aid flavor, Sharkleberry Fin.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="beerTaps">
          <Card.Img variant="top" src="images/java.jpg" />
          <Card.Body>
            <Card.Title>Java Dream</Card.Title>
            <Card.Subtitle>Cream Ale - 5.5% ABV</Card.Subtitle>
            <Card.Text>
              Cream Ale brewed with Lactose and Coffee Beans.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>


    <Row>
      On Deck
    </Row>

    <Row>
      Nothing
    </Row>

  </Container>
);

export default App;
