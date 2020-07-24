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
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8 ">        
                                <h1> evitA</h1>
                                    <div className= "col ml-5">
                                        <h1>  loBo</h1>
                                    </div>   
                                 </div>
                             </div>
                         </div>
                </Jumbotron>

    <div className="sidenav d-none d-lg-block d-xl-block">
    <NavLink className="nav-link" to="/about"> About </NavLink>   
    <NavLink className="nav-link" to="/design"> Design </NavLink>
    <NavLink className="nav-link" to="/games"> Games </NavLink>
    <NavLink className="nav-link" to="/contact"> Contact </NavLink>
      </div>



      <Navbar dark sticky="top" expand="md" className =" d-block d-lg-none ">
        <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className = "navbar-nav mr-4  text-right">
                                <NavItem >
                                    <NavLink className="nav-link" to="/about"> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/design">Design
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/games">Games
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact"> Contact
                                    </NavLink>
                                </NavItem>
                           
                            </Nav>
                        </Collapse>
                        </div>
                    </Navbar>

                
            </React.Fragment>
        );
    }
}

export default Header;