import React from "react";
import { Link } from "react-router-dom";
import  "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul className="nav-child">
                    <li>
                        <Link to="/profile-gitpage">Home</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}        

export default Navbar;