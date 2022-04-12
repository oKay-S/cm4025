import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import BgImage from '../assets/spotted-hyena-g4c2992753_1920.jpg';
import "../styles/Login.css";

const baseURL = "/signupform";

const Signup = () => {

    const [formValue, setformValue] = React.useState({
        username: '',
        displayname: '',
        password: ''
    });

    const createAccount = async(event) => {
        event.preventDefault();
        event.stopPropagation();
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("username", formValue.uname);
        loginFormData.append("displayname", formValue.dname);
        loginFormData.append("password", formValue.pswrd);

        try {
            // make axios post request
            const response = await axios.post("/signupform", loginFormData, {headers: {'Content-Type': 'multipart/form-data'}});
            console.log(response.data);
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
                <h1> Sign-Up Page </h1>
                <form onSubmit={createAccount} method="post">
                    <div class="formContainer">
                        <label for="uname"><b>Username</b></label>
                        <br/>
                        <input type="text" placeholder="Username" onChange={handleChange} name="uname" required />
                        <br/>
                        <label htmlFor="dname"><b>Display Name</b></label>
                        <br/>
                        <input type="text" placeholder="Display Name" onChange={handleChange} name="dname" required/>
                        <br/>
                        <label htmlFor="pswrd1"><b>Password</b></label>
                        <br/>
                        <input type="password" placeholder="Password" onChange={handleChange} name="pswrd" required />
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