import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (

        <footer className="site-footer">
`        <div className="container">
            <div className="row">      
                    <div className="col mr-3 my-3 border border-white text-center d-block d-lg-none">
                        <h3 className = "my-3 mr-3"><u>Menu</u></h3>
                        <ul className="list-unstyled mr-3 ">
                            <h4>
                            <li><Link to='/about'>About</Link></li>
                              <li><Link to='/design'>Design</Link></li>  
                            <li><Link to='/games'>Games</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                             </h4>
                        </ul>
                    </div>
  
                    <div className="col mx-4 my-3 border border-white text-center">
                        <h3 className = "my-3 "> <u>Social</u></h3>
                        <ul className="list-unstyled">
                            <h4>
                                
                            <a href="https://www.linkedin.com/in/evitalobo/"><i className="fa fa-linkedin fa-lg mx-3 my-2"></i></a>
                            <a href="https://github.com/Evitalobo"><i className="fa fa-github fa-lg mx-3 my-2"></i></a>
                           <a href="mailto:evitarlobo@gmail.com"><i className="fa fa-envelope fa-lg mx-3 my-2"></i></a>
                            </h4>
                        </ul>
                    </div>
            </div>
        </div>
    </footer>
 
    );
}

export default Footer;