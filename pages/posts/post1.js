import { Carousel } from 'react-responsive-carousel';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function FirstPost(){
    return (
        <Carousel>
                  <div>
                      <img src="/pic1.png" alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="/pic2.png" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="/pic1.png" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/pic2.png" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/pic1.png" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
    )
}