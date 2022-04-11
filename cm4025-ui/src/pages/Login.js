import React from 'react';
import { Link } from "react-router-dom";
import BgImage from '../assets/spotted-hyena-g4c2992753_1920.jpg';
import "../styles/Login.css";

function Login() {
    return (
        <div className="login" style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="loginContainer">
                <h1> Log-In Page </h1>
                <form action="" method="post">
                    <div class="formContainer">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Username" name="uname" required />
                        <br/>
                        <br/>
                        <br/>
                        <label htmlFor="uname"><b>Password</b></label>
                        <input type="password" placeholder="Password" name="pswrd" required />
                        <br/>
                        <br/>
                        <br/>
                        <button type="submit">Log-In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;