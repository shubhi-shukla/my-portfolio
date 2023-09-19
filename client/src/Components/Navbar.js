import React from 'react';
import person from '../images/person.jpg';
import myimg from '../images/myimg.jpg';

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container flex-lg-column">
                    <a className="navbar-brand mx-lg-auto mb-lg-4" href="#">
                        <span className = "h3 fw-bold d-block d-lg-none">Shubhi Shukla</span>
                        <img src = {myimg} className = "d-none d-lg-block rounded-circle"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
                        <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-link" href="#reviews">Reviews</a>
                        </li> */}
                        <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;