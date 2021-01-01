import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (

        <footer className="site-footer">
`        <div className="container">
            <div className="row">      
                    <div className="col-12 col-m-6 my-3 border border-white text-center d-block d-lg-none">
                        <h6 className = "my-3 "><u>Menu</u></h6>
                        <ul className="list-unstyled ">
                            <h4>
                            <Link to='/about'>About</Link> <p/>
                            <Link to='/design'>Design</Link><p/>
                            <Link to='/games'>Games</Link><p/>
                            <Link to='/contact'>Contact</Link><p/>
                             </h4>
                        </ul>
                    </div>
  
                    <div className="col-12 col-m-6 my-3 border border-white text-center">
                        <h6 className = "my-5 "> <u>Social</u></h6>
                        <ul className="list-unstyled">
                            <h6>
                                
                            <a href="https://www.linkedin.com/in/evitalobo/"><i className="fa fa-linkedin fa-lg mx-3 my-2"></i></a>
                            <a href="https://github.com/Evitalobo"><i className="fa fa-github fa-lg mx-3 my-2"></i></a>
                           <a href="mailto:evitarlobo@gmail.com"><i className="fa fa-envelope fa-lg mx-3 my-2"></i></a>
                            </h6>
                        </ul>
                    </div>
            </div>
        </div>
    </footer>
 
    );
}

export default Footer;