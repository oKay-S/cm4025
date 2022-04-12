import React from 'react';
import { Link } from "react-router-dom";
import BgImage from '../assets/spotted-hyena-g4c2992753_1920.jpg';
import "../styles/Login.css";
import axios from "axios";

function Login() {

    const [formValue, setformValue] = React.useState({
        username: '',
        password: ''
    });

    const createAccount = async(event) => {
        event.preventDefault();
        event.stopPropagation();
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("username", formValue.uname);
        loginFormData.append("password", formValue.pswrd);

        try {
            // make axios post request
            const response = await axios.post("http://localhost:3001/loginform", loginFormData, {headers: {'Content-Type': 'multipart/form-data'}});

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setformValue({
            ...formValue,
            [e.target.name]: value
        });
    };

    return (
        <div className="login" style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="loginContainer">
                <h1> Log-In Page </h1>
                <form onSubmit={createAccount} method="post">
                    <div class="formContainer">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Username" onChange={handleChange} name="uname" required />
                        <br/>
                        <br/>
                        <br/>
                        <label htmlFor="pswrd"><b>Password</b></label>
                        <input type="password" placeholder="Password" onChange={handleChange} name="pswrd" required />
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