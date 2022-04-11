import React from 'react';
import { Link } from "react-router-dom";
import BgImage from '../assets/possum-ga6a02f548_1920.jpg';
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="headerContainer">
                <h1> Love For The Uglies </h1>
                <Link to="/login">
                    <button>Log In</button>
                </Link>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;