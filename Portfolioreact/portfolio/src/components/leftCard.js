import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import bio from '../img/bio.JPG'; 

function leftCard(props) {
    return (
   
                <Card className="lcard col-12 col-lg-10 text-center align-self-center card flex-row flex-wrap" href="#">
                    <div className="card-header align-self-center col-6">
                        <Card.img src="//placehold.it/200" alt="" />
                     </div>
                    <div className="card-block col-6 py-5 ">
                    <Card.Title><h3 >Project 3</h3></Card.Title>
                    <Card.Text><h2 className=" text-center pl-2 py-4">
                    Project About Project About Project About Project About Project About
                    Project About Project About Project About Project About Project About
                    </h2></Card.Text>
                    </div>
                </div>
            </div>
        </Card>
    );
}

 
function RenderGameItem({game}) {
    return (
        <Card>
            <Link to={`/game/${game.id}`}>
                <CardImg width="100%" src={game.image} alt={game.name} />
                <CardImgOverlay>
                    <CardTitle>{game.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Games(props) {

    const gameList = props.games.map(game => {
        return (
            <div key={game.id} className="col-md-5 m-1">
                <RenderGameItem game={game} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Games</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Games</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {gameList}
            </div>
        </div>
    );
}


export default leftCard;