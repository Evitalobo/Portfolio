import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {
        return (
            <React.Fragment>
             




      <Navbar light sticky="top" expand="md" className =" d-block ">
        <div className="container ">
        <div className="row">
                            <div className="col-6 mr-5">        
                                <h1> evitA</h1>
                                    <div className= "col ml-5">
                                        <h1>  loBo</h1>
                                    </div>   
                                 </div>
                             </div>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                       <h3> <Nav navbar className = "navbar-nav ml-5 text-right ">
                                <NavItem >
                                    <NavLink className="nav-link " to="/about"> About
                                    </NavLink>
                                </NavItem>

                               <NavItem>
                                    <NavLink className="nav-link " to="/design">Design
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link " to="/games">Games
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link " to="/contact"> Contact
                                    </NavLink>
                                </NavItem>
                           
                            </Nav>
                            </h3>
                        </Collapse>
                        </div>
                    </Navbar>

                
            </React.Fragment>
        );
    }
}

export default Header;