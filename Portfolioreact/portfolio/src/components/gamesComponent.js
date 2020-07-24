import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import wp from "../img/WindowPane.png"

function RenderGameItemR({game}) {
    return (
        <Card>
            <Link to={`/game/${game.name}`}>
                <CardImg width="100%" src={game.image} alt={game.name} />
                <CardImgOverlay>
                    <CardTitle>{game.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function RenderGameItemL({game}) {
    return (
        <div className= "dividerspace container">
            <Card div className = "lcard col-12 col-lg-10 col-xl-12 text-center card flex-row flex-wrap" href="#">
                <div className=" align-self-center col-6">
                    <Link to={`/game/WindowPane`}>
                        <CardImg className ="imgstyle rounded" src={wp} />
                            </Link> <div className="card-block col-6 ">
                             <CardTitle><h3 >Window Pane</h3></CardTitle>
                                <CardBody> <h2 className=" text-center pl-2 py-3">
                                Window Pane is a first person narrative puzzle game based on Project MKUltra.
                The player agrees to be a clinical trial test-subject but things go horribly wrong. 
                The player must figure out how to navigate around the house and which evidence and story paths 
                will help them successfully escape. 
                                    <div className="card mt-5 outlineIn text-center">
                                    <ul className="list-group text-left list-group-flush">
                                        <li className="list-group-item outlineIn">Roles: Creator, Producer, UX Designer, Game Designer, Developer</li>
                                        <li className="list-group-item outlineIn"> Languages: C#, GLSL</li>
                                        <li className="list-group-item outlineIn">Tools: Unity 3D with Oculus VR</li>
                                    </ul>
                                     </div>
                               </h2> </CardBody>
                             </div>
                     
                     </div>
                     </Card>
                     </div>
        
    );
}


function Game(props) {

   

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
          
            <RenderGameItemL/>
            
        </div>
    );
}

export default Game;