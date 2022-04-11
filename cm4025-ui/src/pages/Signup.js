import React from 'react';
import { Link } from "react-router-dom";
import BgImage from '../assets/spotted-hyena-g4c2992753_1920.jpg';
import "../styles/Login.css";

function Signup() {
    return (
        <div className="login" style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="loginContainer">
                <h1> Sign-Up Page </h1>
                <form action="" method="post">
                    <div class="formContainer">
                        <label for="uname"><b>Username</b></label>
                        <br/>
                        <input type="text" placeholder="Username" name="uname" required />
                        <br/>
                        <label htmlFor="dname"><b>Display Name</b></label>
                        <br/>
                        <input type="text" placeholder="Display Name" name="uname" required/>
                        <br/>
                        <label htmlFor="uname"><b>Password</b></label>
                        <br/>
                        <input type="password" placeholder="Password" name="pswrd" required />
                        <br/>
                        <label htmlFor="uname"><b>Confirm Password</b></label>
                        <br/>
                        <input type="password" placeholder="Password" name="pswrd" required />
                        <br/>
                        <br/>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;