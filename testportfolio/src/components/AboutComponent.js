import React, {useState} from 'react';
import {Carousel,CarouselItem, CarouselControl,
    CarouselIndicators,  } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {
    return (
   
    <div className= "row ">
        <div className= "d-block d-md-none mt-5">
           <RenderImage />
           <RenderAbout /> 
        </div>
        <div className= "d-none d-md-block d-lg-block d-xl-block" >
          <div className = "row">
               <RenderAbout /> 
          <RenderImage />
          </div>
       </div>
    </div>
    );
}

const items = [
    {
      src: '/img/profile1.JPG',
      altText: 'Slide 1'
   
    },
    {
      src: '/img/profile2.JPG',
      altText: 'Slide 2'

    }
  ];
  
  const RenderImage = (props) => {


    
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="d-block w-100 h-100"/>
        </CarouselItem>
      );
    });
  
    return (

        
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className ="carouselObj col-10 col-s-10 col-md-3 col-lg-4 col-xl-3 "
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }


function RenderAbout() {
    return (
     
            <div className = "aboutme col-10 col-md-7 col-lg-6 col-xl-6">
                <h2>
                Evita is a UI/UX engineer and front-end developer looking for a full-time job.​
<p/>Whether it is creating games, or front-end UI, Evita's work always incorporates human-centric, UX elements  to make the overall product user-friendly and immersive. 
<p/>Evita is a recent graduate from University of California- Santa Cruz (BS in Computer Science – Game Design). Due to COVID, They are currently freelancing and enhancing their skillset through two virtual courses:  Springboard UI/UX Design Career track and NuCamp Front-end development boot camp.​
<p/>When they are not focusing on tech, I can be found painting, jewelry making, gardening and spending time in nature. 
                </h2>
        </div>




    );
}
 

export default About;