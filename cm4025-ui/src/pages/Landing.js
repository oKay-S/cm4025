import React from 'react';
import { Link } from "react-router-dom";
import BgImage from '../assets/blue-iguana-g83afdb16e_1920.jpg';
import "../styles/Landing.css";
import axios from "axios";
import login from "./Login";

function Landing() {


    const [formValue, setformValue] = React.useState({
        commentUsername: '',
        bulk: ''
    });

    const displayComments = (comments) => {

        if (!comments.length) return null;


        return comments.map((comment, index) => (
            <div key={index} className="comment__display">
                <h3>{comment.commentUsername}</h3>
                <p>{comment.bulk}</p>
            </div>
        ));
    };




    const enterComment = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("comment", formValue.cmnt);
        try {
            // make axios post request
            const response = axios.post("http://localhost:3001/loginform", loginFormData, {headers: {'Content-Type': 'multipart/form-data'}});
            localStorage.setItem('user', response.data)
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const getDisplayname = (event) => {
        try {
            // make axios post request
            const response = axios.get("http://localhost:3001/user");
            console.log(response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const getUsername = (event) => {
        try {
            // make axios post request
            const response = axios.get("http://localhost:3001/user");
            console.log(response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    const updateDisplayname = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("displayname", formValue.dname);
        const response = axios.post("http://localhost:3001/user", loginFormData, {headers: {'Content-Type': 'multipart/form-data'}});
        console.log(response.data);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setformValue({
            ...formValue,
            [e.target.name]: value
        });
    };



    return (
        <div className="landing" style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="landingContainer">
                {/*<div className="contentBox">*/}
                {/*    <h1>Comments</h1>*/}
                {/*    <form onSubmit={enterComment}>*/}
                {/*        <h2>Submit a Comment</h2>*/}
                {/*        <input type="text" placeholder="Comment" onChange={handleChange} name="cmnt" required />*/}
                {/*        <button type="submit">Sumbit</button>*/}
                {/*    </form>*/}
                {/*    <div className="comment-">*/}
                {/*        {this.displayComments}*/}
                {/*    </div>*/}

                {/*</div>*/}

                <div className="contentBox">
                    <h1>Settings</h1>
                    <h2>{getUsername}</h2>
                    <form onSubmit={updateDisplayname}>
                        <h2>{getDisplayname}</h2>
                        <input type="text" placeholder="Update Display Name" onChange={handleChange} name="dname" required />
                        <button type="submit">Sumbit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Landing;