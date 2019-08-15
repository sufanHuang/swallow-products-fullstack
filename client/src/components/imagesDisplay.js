import React from 'react';
import { Carousel } from "react-bootstrap"

export default function ImagesDisplay() {
  return (
      <Carousel>
          <Carousel.Item>
              <img
                  className="d-block w-100 carousel-image"
                  src="birdNest.jpg"
                  alt="First slide"
              />
              <Carousel.Caption>
                  <p>100% natural, environmentally-friendly,
                      premium quality bird nest.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100 carousel-image"
                  src="birdNest2.jpg"
                  alt="Third slide"
              />

              <Carousel.Caption>
                  <p>View our products for a modern twist on traditional bird's nest.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100 carousel-image"
                  src="birdNest3.jpg"
                  alt="Third slide"
              />

              <Carousel.Caption>
                  <p> A heritage food of China, edible bird's nest has been enjoyed for hundreds of years for its tremendous health benefits.</p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  )
}
