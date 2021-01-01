
import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

function RenderDirectoryItem({design}) {
    return (
        <div className = "container">
        <Card className = "lcard col-12 col-lg-11 text-center card flex-row flex-wrap">
            
           <div className ="align-self-center col col-md-6">
            <Link to={`/design/${design.id}`}>
                <CardImg className="imgstyle rounded" src={design.image} alt={design.name} />
            </Link>
            </div>
            <CardBody className= "col col-md-6">
              <h5>  <CardTitle className= " text-center text-dark">{design.name}</CardTitle></h5>
               <h2> <CardText className= "text-center pl-2 py-4">{design.description}</CardText> </h2>
            
            </CardBody>
        </Card>
        </div>
    );
}

function Project(props) {

    const project = props.designs.map(design => {
        return (
            <div key={design.id} className="  ">
                <RenderDirectoryItem design={design} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <Breadcrumb className = "col-12 breadAlign">
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Design</BreadcrumbItem>
                    </Breadcrumb>

                </div>
            </div>
                {project}
                                    <br/><br/>
        </div>
    );
}

export default Project; 