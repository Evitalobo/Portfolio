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
        className ="carouselObj col-4 col-md-3 col-xl-2 "
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
     
            <div class="aboutme col-10 col-md-5 col-lg-5 col-xl-6">
                <h2>
                  Evita is a UI/UX designer, game designer and front end developer. They graduated from UCSC with a Computer Science:
                  Game Design(B.S.) degree. They spent much of their time at university creating a wide variety of games - focusing on human centric design and working on iterative design. They are currently attending a UI/UX Design and a Front-End Bootcamp to build applications 
                  that users could easily engage with. When they are not creating/ redesigning apps, they can be 
                  found making art, gardening  and spending time in nature.
                </h2>
        </div>




    );
}
 

export default About;