import React, {useEffect } from 'react';
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {

    useEffect(() => {
        const nav = document.querySelector(".nav-container");

        const handleScroll = () => {
            if (nav) {
                if (window.scrollY > 0) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <div className="nav-container">
            <ul className="nav nav-underline">
                <li className="nav-item">
                    <Link to="/Home" className="nav-link"> home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/PlanetList" className="nav-link"> planet list </Link>
                </li>
            </ul>
        </div>
    );
};


export default Navbar;
