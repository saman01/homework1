import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';

export function Home () {
        return (
          <Carousel className="images" id="images">
          <Carousel.Item>
            <img
              className="img"
              src={first}
              alt="First slide"
            />
            <Carousel.Caption className="cap" id="overlay">
              <p>what a beautiful picture not ?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img"
              src={second}
              alt="Third slide"
            />
        
            <Carousel.Caption className="cap" id="overlay">
              <p>where the hell are you ?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img"
              src={third}
              alt="Third slide"
            />
        
            <Carousel.Caption className="cap" id="overlay">
              <p>this is for you </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
          );
}
 
