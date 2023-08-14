import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default function SimpleSlider() {
  var settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   variableWidth:true,
   initialSlide: 0,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         initialSlide: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         initialSlide: 1
       }
     }
   ]
 };

 var settings2 = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth:true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        initialSlide: 1
      }
    }
  ]
};

  return (
   <div className="shikilia">
    <div className="pilider">
      <Slider  {...settings}>
        <div className="card1"  >
            <div className="top">  
              <h2 style={{margin:"0px 0px 10px 0px"}}>UX/UI Development</h2>
            </div>
            <div className="centerdiv" id="c1">
            
            </div>
            <div className="bottoms">
                <button className="butsts">View Candidate</button>
            </div>
        </div>

        <div className="card1"  >
            <div className="top">  
              <h2 style={{margin:"0px 0px 10px 0px"}}>Web Developer</h2>
            </div>
            <div className="centerdiv" id="c2">
            
            </div>
            <div className="bottoms">
                <button className="butsts">View Candidate</button>
            </div>
        </div>
          
        <div className="card1"  >
            <div className="top">  
              <h2 style={{margin:"0px 0px 10px 0px"}}>Software Developer</h2>
            </div>
            <div className="centerdiv" id="c3">
            
            </div>
            <div className="bottoms">
                <button className="butsts">View Candidate</button>
            </div>
        </div>
        


        <div className="card1" >
          <div className="top">  
                <h2 style={{margin:"0px 0px 10px 0px"}}>UX/UI Development</h2>
              </div>
              <div className="centerdiv" id="c1">
              
              </div>
              <div className="bottoms">
                  <button className="butsts">View Candidate</button>
              </div>
        </div>

      </Slider>
    </div> 


    <div>
      <Slider {...settings2}>
        <div className="card12"  >
          <p style={{margin:"0px 0px 20px 0px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo facere dolorum totam modi vitae! Libero esse exercitationem quasi cupiditate explicabo quas nostrum tempora repre.</p>
          <p style={{margin:"0px"}}>Jane Doe</p>
        </div>

        <div className="card12"  >
          <p style={{margin:"0px 0px 20px 0px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo facere dolorum totam modi vitae! Libero esse exercitationem quasi cupiditate explicabo quas nostrum tempora repre.</p>
          <p style={{margin:"0px"}}>Jane Doe</p>
        </div>
          
        <div className="card12"  >
          <p style={{margin:"0px 0px 20px 0px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo facere dolorum totam modi vitae! Libero esse exercitationem quasi cupiditate explicabo quas nostrum tempora repre.</p>
          <p style={{margin:"0px"}}>Jane Doe</p>
        </div>
        
        <div className="card12"  >
          <p style={{margin:"0px 0px 20px 0px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo facere dolorum totam modi vitae! Libero esse exercitationem quasi cupiditate explicabo quas nostrum tempora repre.</p>
          <p style={{margin:"0px"}}>Jane Doe</p>
        </div>

      </Slider>
    </div>  
   </div>
  );
}