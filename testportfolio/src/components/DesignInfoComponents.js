import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import '../App.css';

    function RenderDesign({design}) {
        console.log("DesignwithId");
            return(
            <div className = "col-md-10 banner ">
        
                    <img className= "banner" top src={design.image} alt={design.name} />
             
            </div>
        );

    }

    function RenderComments({designinfo}) { 
        console.log(designinfo);
        if(designinfo){
            return(
              <div className = 'col-xs-11 mx-5 '>
                    
                    {designinfo.map(info=> {
                        return(
                            <div infolist = {designinfo.id}>
                            
                            <br />
                                <h5> Problem Statement</h5>
                                <p>{info.problem} </p>
                                <br />
                                <p>{info.problem1} </p>
                                <br />
                                <h5> Roles & Responsibilities </h5>
                                <p>{info.roles} </p>
                                <ul>
                                    <li>{info.role1}</li>
                                    <li>{info.role2}</li>
                                </ul>
                                <br/>
                                <h5> Timeline</h5>
                                <p>{info.timeline}</p>
                                <br />
                                <h5> Tools</h5>
                                <p>{info.tools}</p>
                                
                                <br />
                                <h5> Users & Audience </h5>
                                <p>{info.user} </p>
                                <br />
                                <h5> Scope & Constraints </h5>
                                <p>{info.scope} </p>

                                
                                <br />
                                <h5> Research and Testing Methods </h5>
                                <p>{info.research} </p>
                                <br />

                                <div className= "trailer">
                                {info.movie}
                                </div>
                                <br />
                                <a className= "imgcenter h3 text-center" href= {info.link}>{info.altname}</a> 
                                <br />
                                <h5> {info.title1}</h5>
                                <br />

                                {info.bullet1_3}  
                                <p>{info.process1} </p>
                                {info.bullet2_3}
                                <p>{info.process1_2} </p>
                                {info.bullet3_3}
                                <p>{info.process1_3} </p>
                                {info.bullet4_3}
                                <p>{info.process1_4} </p>

                                <br />
                                {info.image1} 
                                <br />
                                <h6><p>{info.caption1} </p></h6>
                                <br />
                                <br />
                               
                                <h5> {info.title2}</h5>
                                <br />
                               
                                <p>{info.process2} </p>
                                {info.image2}
                                {info.image3}
                                
                                <br /> <br />
                                <h6><p>{info.caption2} </p></h6>

                            
                                <br />
                                <h5> {info.title3}</h5>
                                <br />
                                <p>{info.process3} </p>
                               
                        
                                {info.image4}
                                {info.image5} 
                                
                                <br />
                                <h6><p>{info.caption3} </p></h6>
                                <br />
                                <h5> {info.title4}</h5>
                                <br />
                                <p>{info.process4} </p>
                              
                                {info.image6}
                                {info.image7}
                                <br /><br />
                                <h5> {info.bullettitle1}</h5>
                                <br />

                                <ul>
                                    <li>{info.bullet1_1}</li>
                                    <li>{info.bullet2_1}</li>
                                    <li>{info.bullet3_1}</li>
                                    <li>{info.bullet4_1}</li>
                                    <li>{info.bullet5_1}</li>
                                    <li>{info.bullet6_1}</li>
                                    <li>{info.bullet7_1}</li>
                                    <li>{info.bullet8_1}</li>
                                    <li>{info.bullet9_1}</li>
                                </ul>
                                
                                <br /><br />
                                <h5> {info.bullettitle2}</h5>
                                <br />

                                <ul>
                                    <li>{info.bullet1_2}</li>
                                    <li>{info.bullet2_2}</li>
                                    <li>{info.bullet3_2}</li>
                                    <li>{info.bullet4_2}</li>
                                    <li>{info.bullet5_2}</li>
                                    <li>{info.bullet6_2}</li>
                                    <li>{info.bullet7_2}</li>
                                    <li>{info.bullet8_2}</li>
                                    <li>{info.bullet9_2}</li>
                                </ul>

                                
                                <br />
                                <p>{info.process5} </p>
                                <br />
                                <p>{info.process6} </p>
                                <br />
                                <p>{info.process7} </p>
                                <br />
                                <p>{info.process8} </p>
                                <br />
                                <p>{info.process9} </p>
                                <br />
                                <p>{info.process10} </p>
                                <br />
                                <p>{info.process11} </p>
                                <br />
                                
                                <br />
                                <h5> {info.title5}</h5>
                                <p>{info.summary} </p>

                                <br />
                            
                            </div>
                        );
                    })}
                </div>
            )
        };
        return <div/>
    }

    function DesignInfo(props) {
        if (props.design) {
            console.log(props.design);
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Breadcrumb className= "breadAlign ">
                                <BreadcrumbItem  ><Link to="/design">Design</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.design.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h5 className = "text-center titlecard col-4 text-dark">{props.design.name}</h5>
                        </div>
                    </div>
                    <div className="col-12 row lcard">
                        <RenderDesign design={props.design} />
                        <RenderComments designinfo={props.designinfo} />
                    </div>
                </div>
            );
        }
        return <div />;
    }


export default DesignInfo; 