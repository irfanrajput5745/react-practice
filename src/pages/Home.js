import React from 'react'
import Image from "../components/about_us_img1.png"



import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from '../components/SectionHeader';

const Home = () => {

    var settings = {
        dots:
        true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <>
    
    <div className='abc'>

    <h1>This is Home</h1>

    
    <SectionHeader  title="Home" des=" lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"/>
    <Slider {...settings}>

    <img src={Image}></img>
    <img src={Image}></img>
    <img src={Image}></img>
    </Slider>
    </div>
    </>
  )
}

export default Home