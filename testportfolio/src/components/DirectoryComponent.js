import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({campsite}) {
    return (
        <div className = "container">
        <Card className = "lcard col-10 col-m-8 text-center card flex-row flex-wrap">
            
           <div className ="align-self-center  col-6">
            <Link to={`/directory/${campsite.id}`}>
                <CardImg className="imgstyle rounded" src={campsite.image} alt={campsite.name} />
            </Link>
            </div>
            <CardBody className= "col-6">
                <CardTitle className= "text-dark">{campsite.name}</CardTitle>
                <CardText className= "text-center pl-2 py-4">{campsite.description}</CardText>
            
            </CardBody>
        </Card>
        </div>
    );
}

function Directory(props) {

    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="  ">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <Breadcrumb className = "col-10.5 breadAlign">
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>

                </div>
            </div>
                {directory}
        </div>
    );
}

export default Directory; 