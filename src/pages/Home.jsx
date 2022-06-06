import React from 'react';
import { Carousel } from 'react-bootstrap';
import './home.css';

const Home = () => {
    return (
        <div>
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={require("../assets/home_image3.jpg")}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={require("../assets/home_image2.jpg")}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../assets/home_image1.jpg")}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Home;