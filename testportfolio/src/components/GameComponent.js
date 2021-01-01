import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({game}) {
    return (
        <div className = "container">
        <Card className = "lcard col-12 col-lg-11 text-center card flex-row flex-wrap">
            
           <div className ="align-self-center col col-md-6">
            <Link to={`/games/${game.id}`}>
                <CardImg className="imgstyle rounded" src={game.image} alt={game.name} />
            </Link>
            </div>
            <CardBody className= "col col-md-6">
              <h5>  <CardTitle className= "text-center text-dark">{game.name}</CardTitle></h5>
               <h2> <CardText className= "text-center pl-2 py-4">{game.description}</CardText> </h2>
            
            </CardBody>
        </Card>
        </div>
    );
}

function Directory(props) {

    const directory = props.games.map(game => {
        return (
            <div key={game.id} className="  ">
                <RenderDirectoryItem game={game} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <Breadcrumb className = "col-12 breadAlign">
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Games</BreadcrumbItem>
                    </Breadcrumb>

                </div>
            </div>
                {directory}
        </div>
    );
}

export default Directory; 