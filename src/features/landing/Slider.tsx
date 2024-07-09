"use client"

import React from 'react'
import { Carousel } from '@mantine/carousel';
import { Center, Image } from '@mantine/core';


const images = [
    "https://res.cloudinary.com/dnl6eshnn/image/upload/v1720417839/pexels-pixabay-164634_kmcfgu.jpg",
    "https://res.cloudinary.com/dnl6eshnn/image/upload/v1720417825/pexels-pixabay-63294_nwtqmt.jpg"
]

const Slider = () => {
  return (
    <Carousel  withIndicators loop>
      {
        images.map((image, index) =>(
            <Carousel.Slide key={image} mt={2} >
                    <Image   src={image} alt="carousel image" h={400}/>
            </Carousel.Slide>
        ))
      }
    </Carousel>

   
  )
}

export default Slider