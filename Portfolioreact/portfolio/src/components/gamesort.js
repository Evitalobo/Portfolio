import React from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem ,Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderGame({game}) {
    return(
    <div className = 'col-md-5 and m-1'>
        <Card>
            <CardImg top src={game.image} alt={game.name} />
            <CardBody>
                <CardText>{game.description}</CardText>
            </CardBody>
        </Card>
    </div>
);}

function GameInfo(props) {
if (props.game) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/games">Games</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.game.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.game.name}</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderGame game={props.game} />
       
            </div>
        </div>
    );
}
return <div />;
}

export default GameInfo;