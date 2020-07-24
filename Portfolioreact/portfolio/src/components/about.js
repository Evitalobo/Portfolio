import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import bio from '../img/bio.JPG'; 

function About(props) {
    return (
        <div className= "row" >
           <RenderImage />
          <RenderAbout />  
        </div>
    );
}

function RenderImage() {
    return (
            <div className= "carouselObj col-6 col-md-5 col-lg-4 col-xl-3  ">
                    <div className="carousel-inner">
                            <img src={bio} className="d-block w-100 h-100" />   
                    </div>
            </div>
    );
}

function RenderAbout() {
    return (
       <div class="container">
            <div class="aboutme col-10 col-8-md col-lg-4 col-xl-5">
                <h2>About me About me About me About me About me About me About me About me About me About me 
                    About me About me About me About me About me About me About me About me  About me About me
                    About me About me About me About me About me About me About me About me  About me About me
                    About me About me  About me About me About me About me About me About me About me About me
                    About me About me  About me About me About me About me About me About me About me About me
                    About me About me  About me About me About me About me About me About me About me About me
                    About me About me  About me About me About me About me About me About me About me About me
                    About me About me  About me About me About me About me About me About me About me About me
                    About me About me  About me About me About me About me About me About me About me About me
                </h2>
        </div>
    </div>
    );
}
 

export default About;