import React, { useState } from 'react';
import SiteLogo from '../assets/Love-for-the-Uglies-logos_transparent.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import DehazeIcon from '@mui/icons-material/Dehaze';


function Navbar() {
    const [openlinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openlinks);

    };

    return (
        <div className="navbar">
            <div className="leftside" id={openlinks ? "open" : "close"}>
                <img src={SiteLogo}/>
                <div className="hiddenLinks">
                    <Link to="/Home"> Home </Link>
                    <Link to="/About"> About Us </Link>
                    <Link to="/LogIn"> Login </Link>
                    <Link to="/SignUp"> Sign-Up </Link>
                </div>
            </div>
            <div className="rightside">
                <Link to="/home"> Home </Link>
                <Link to="/about"> About Us </Link>
                <Link to="/login"> Login </Link>
                <Link to="/signup"> Sign-Up </Link>
                <button onClick={toggleNavbar}>
                    <DehazeIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar;