import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.svg';
import '../cssStyling/Navbar.css';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container nav-container">
                        <div className="relative-section five columns">
                            <Link to="/">
                                <img src={Logo} alt="logo" style={{ width: "25%" }} />
                            </Link>
                        </div>

                        <div className="nav-active seven columns" role='navigation' aria-label='navbar-links'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/about" className="nav-link active">About</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/price" className="nav-link active" role="button" aria-expanded="false">
                                        Pricing
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/product' className="nav-link active" aria-disabled="true" >Product</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/support' className="nav-link active" aria-disabled="true">Support</Link>
                                </li>

                                <li className="nav-item">
                                    <button className="btn btn-outline-secondary" style={{border:"none"}}><i className="fa-solid fa-bars"></i></button>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
