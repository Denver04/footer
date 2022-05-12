import React from 'react'
import Carousel from 'react-grid-carousel';
import sui from "./sui1.png";
import sketchfab from "./sketchfab1.png";
import mfs from "./ps1.png";
import ps from "./ps1.png";
import defiant from "./defiant1.png";
import nvidia from "./nvidia.png";
import polygon from "./polygon1.png";
import "./App.css";
 
function Carousl(){
  return (
    <Carousel cols={4} rows={1} mobileBreakpoint={767} style={{backgroundColor:"blue"}}>
      <Carousel.Item>
        <img src={sui} className="carousel-image0" width="50%" />
        <p className='company-name'  style={{top:"-45%" , color:"white" ,left:"24%"}}><strong>Startupindia</strong></p>
      </Carousel.Item>
      <Carousel.Item>
        <img src={polygon} className="carousel-image1" width="50%" />
        <p className='company-name'  style={{top:"-12%" , color:"white"}}><strong>Polygon</strong></p>
      </Carousel.Item>
      <Carousel.Item>
        <img src={mfs} className="carousel-image2" width="64%" />
        <p className='company-name'  style={{top:"-9%" , color:"white"}}><strong>Microsoft for startups</strong></p>
      </Carousel.Item>
      <Carousel.Item>
        <img src={sketchfab} className="carousel-image3" width="30%" />
        <p className='company-name' style={{top:"4%", color:"white"}}><strong>Sketchfab</strong></p>
      </Carousel.Item>
      <Carousel.Item>
        <img src={defiant} className="carousel-image4" width="60%" />
        <p className='company-name'  style={{top:"-8%", color:"white"}}><strong>Defiant</strong></p>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ps} className="carousel-image5" width="64%" />
        <p className='company-name'  style={{top:"-10%", color:"white"}}><strong>Polygon Studios</strong></p>
      </Carousel.Item>
      <Carousel.Item>
        <img src={nvidia} className="carousel-image6" width="42%" />
        <p className='company-name' style={{top:"10%", color:"white"}}><strong>NVIDIA</strong></p>
      </Carousel.Item>
        
    </Carousel>
  )
}

export default Carousl;