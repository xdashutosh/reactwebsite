import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
const Service = () => {
  return (
    <div className='service'>
      <Carousel
 infiniteLoop
 autoPlay
 showStatus={false}
 interval={1000}
 >
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
      </Carousel>
    </div>
  )
}

export default Service
