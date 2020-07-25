import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (

        <footer className="site-footer">
        <div className="container">
            <div className="row">      
                    <div className="col mx-5 my-3 border border-white text-center">
                        <h3 className = "my-3"><u>Menu</u></h3>
                        <ul className="list-unstyled">
                            <h4>
                            <li><Link to='/design'>Home</Link></li>
                            <li><Link to='/games'>Directory</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                             </h4>
                        </ul>
                    </div>
  
                    <div className="col mx-5 my-3 border border-white text-center">
                        <h3 className = "my-3"> <u>Social</u></h3>
                        <ul className="list-unstyled">
                            <h4>
                                
                            <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                            <a href="#"><i className="fa fa-github fa-lg"></i></a>
                           <a href="#"><i className="fa fa-envelope fa-lg"></i></a>
                            </h4>
                        </ul>
                    </div>
            </div>
        </div>
    </footer>
 
    );
}

export default Footer;