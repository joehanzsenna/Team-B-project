import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image01 from '../../assets/HomePageImages/Hsec4-img1.jpg'
import image02 from '../../assets/HomePageImages/Hsec4-img2.jpg'
import image03 from '../../assets/HomePageImages/Hsec4-img3.jpg'


const HomeSection9 = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);


  };
    return (
       <div className='HomeSection9 container'>
             <Carousel>
          <Carousel.Item className='center'>
            <img
              className="Hsec9Img"
              src={image01}
              alt="First slide"
            />
            {/* <Carousel.Caption> */}
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            {/* </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className='center'>
            <img
              className="Hsec9Img"
              src={image02}
              alt="Second slide"
            />
    
            {/* <Carousel.Caption> */}
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            {/* </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className='center'>
            <img
              className="Hsec9Img"
              src={image03}
              alt="Third slide"
            />
    
            {/* <Carousel.Caption> */}
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            {/* </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
       </div>
      );
}

export default HomeSection9