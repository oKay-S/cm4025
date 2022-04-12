import React, { Component, useEffect }  from 'react';
import { Link } from "react-router-dom";
import BgImage from '../assets/blue-iguana-g83afdb16e_1920.jpg';
import "../styles/Landing.css";
import axios from "axios";
import login from "./Login";





function Landing (){
    const [formValue, setformValue] = React.useState({
        bulk: ''
    });

    const [comments, setComments] = React.useState([]);

    const displayComments = () => {
        axios.get('http://localhost:3001/comments').then(({ data }) => setComments(data))
            .catch( e => console.log(e));
    };


    useEffect(() => {
        displayComments();
    }, []);


    const enterComment = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("bulk", formValue.cmnt);
        try {
            // make axios post request
            const response = axios.post("http://localhost:3001/addcomment", loginFormData, {headers: {'Content-Type': 'multipart/form-data'}});
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const updateDisplayname = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("displayname", formValue.dname);
        const response = await axios.post("http://localhost:3001/user", loginFormData, {headers: {'Content-Type': 'multipart/form-data'}});
        console.log(response.data);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setformValue({
            ...formValue,
            [e.target.name]: value
        });
    };

    const commentsFinal = comments.map(comment => (
        <div key={comment._id}>
            <h2>{comment.username}</h2>
            <h3>{comment._id}</h3>
            <p>{comment.comment}</p>
            </div>
            ));

    return (
        <div className="landing" style={{backgroundImage: `url(${BgImage})`}}>
        <div className="landingContainer">
            <div className="contentBox">
                <h1>Comments</h1>
                <form onSubmit={enterComment}>
                    <h2>Submit a Comment</h2>
                    <input type="text" placeholder="Comment" onChange={handleChange} name="cmnt" required/>
                    <button type="submit">Sumbit</button>
                </form>
                <div className="comments">
                    {commentsFinal}
                </div>
            </div>
            <div className="contentBox">
                <h1>Settings</h1>
                <form onSubmit={updateDisplayname}>
                    <input type="text" placeholder="Update Display Name" onChange={handleChange} name="dname"
                           required/>
                    <button type="submit">Sumbit</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Landing;