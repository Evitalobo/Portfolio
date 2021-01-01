import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import '../App.css';

    function RenderCampsite({game}) {
            return(
            <div className = "col-md-10 banner ">
                    <img className= "banner" top src={game.image} alt={game.name} />
            </div>
        );
    }

    function RenderComments({gameinfo}) { 
        console.log(gameinfo);
        if(gameinfo){
            return(
              <div className = 'col-xs-11 mx-5 '>
                    {gameinfo.map(info=> {
                        return(
                            <div infolist = {gameinfo.id}>
                            <h2>
                            <br />
                                <h5> Roles</h5>
                                <p>{info.roles} </p>
                                <br />
                                <h5> Timeline</h5>
                                <p>{info.timeline}</p>
                                <br />
                                <h5> Tools</h5>
                                <p>{info.tools}</p>
                                <br />
                                <h5> Team</h5>
                                <p>{info.team}</p>
                                <br />
                                <h5> Overview</h5>
                                <p>{info.overview} </p>
                                <br />
                            
                                <div className= "trailer">
                                {info.movie}
                                </div>
                                <br />
                                <a className= "imgcenter h3 text-center" href= {info.link}>{info.altname}</a> 
                                <br />
                                <h5> Process</h5>
                                <p>{info.process1} </p>
                                
                                <br />
                                {info.image1} 
                                {info.image2}
                                {info.image3}
                                <br />
                                <h6><p>{info.caption1} </p></h6>
                                <br />
                                <br />
                               
                                <p>{info.process2} </p>
                                {info.image4}
                                {info.image5} 
                                <br /> <br />
                                <h6><p>{info.caption2} </p></h6>

                            
                                <br />
                                <p>{info.process3} </p>
                               
                                {info.image6}
                                {info.image7}
                                <br />
                                <h6><p>{info.caption3} </p></h6>
                                <br />
                                <p>{info.process4} </p>
                            
                            </h2>
                            </div>
                        );
                    })}
                </div>
            )
        };
        return <div/>
    }

    function GameInfo(props) {
        if (props.game) {
            console.log(props.game);
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Breadcrumb className= "breadAlign ">
                                <BreadcrumbItem  ><Link to="/directory">Games</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.game.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h5 className = "text-center titlecard col-4 text-dark">{props.game.name}</h5>
                        </div>
                    </div>
                    <div className="col-10 row lcard">
                        <RenderCampsite game={props.game} />
                        <RenderComments gameinfo={props.gameinfo} />
                    </div>
                </div>
            );
        }
        return <div />;
    }


export default GameInfo; 