import React from 'react';
import "../App.css"
import { Link } from "react-router-dom"

const Nav = () => {
    const navStyle = {
        color: "white"
    }
    return (
        <nav>
            <h3>Examples</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/usertable">
                    <li>Usertable Example</li>
                </Link>
                <Link style={navStyle} to="/todo">
                    <li>Todo Example</li>
                </Link>
            </ul>
        </nav>

    );
}

export default Nav;
