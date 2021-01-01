import React, { Component}  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
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
                            <div className="col-6 mr-5 mt-4">        
                                <h1> evitA</h1>
                                    <div className= "col ml-5">
                                        <h1>  loBo</h1>
                                    </div>   
                                 </div>
                             </div>
                        <NavbarToggler className = "mt-3 " onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className = "navbar-nav mt-3 text-right" >
                   
                                <NavItem >
                                    <NavLink className="nav-link ml-3" to="/about"> <h5>About </h5>
                                    </NavLink>
                                </NavItem>

                               <NavItem>
                                    <NavLink className="nav-link ml-3" to="/design"><h5>Design</h5>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link ml-3" to="/games"><h5>Games</h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-3" to="/contact"> <h5>Contact</h5>
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