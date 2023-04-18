import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel"
import Homeimg from "../../assets/HomePageImages/Hsec5-img1.jpg";
import Homeimg2 from "../../assets/HomePageImages/Hsec5-img2.jpg";
import Homeimg3 from "../../assets/HomePageImages/Hsec5-img3.jpg";
import Homeimg4 from "../../assets/HomePageImages/Hsec5-img4.jpg";

// import '../style/Carousel.css'


function HomeSection10() {
  return (
    <Carousel className="size-change">
      <Carousel.Item>
        <img
          className="d-block image-size"
          src={Homeimg}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="cap-txt">
          <h2>Furniture</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
              elit purus aliquam varius fusce. Proin viverra pharetra, iaculis
              id morbi tempus ut. Vel nibh vitae rutrum lorem eu turpis tempor.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block image-size"
          src={Homeimg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      {/* w-100  default img size  */}
        <img
          className="d-block image-size" 
          src={Homeimg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  image-size"
          src={Homeimg4}
          alt="four slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSection10;