import React from 'react';
import BgImage from '../assets/vulture-gf088d52aa_1920.jpg';
import "../styles/ContentPage.css";

function About() {
    return (
        <div className="content" style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="contentContainer">
                <h1> A society for animals deemed to be socially "ugly"! </h1>
                <p>
                    Quack Doc Doc, quack Quack Doc Doc Doc quack Quack Doc quack. Quack Quack Doc Quack Quack Doc Doc.
                    Quack Quack Doc Doc Doc, quack quack Quack Quack quack Doc. Doc Quack quack Quack quack, quack Doc quack Doc Doc.
                    Quack Doc quack Doc Quack, Doc Quack quack Doc Quack quack.
                </p>
                <p>
                    Quack Quack Quack Doc Doc, Doc Quack Quack Quack quack quack Doc. Quack Doc Doc quack quack Quack quack Doc.
                    Quack Doc Doc quack Quack quack Doc quack.
                 </p>
                <p>
                    Quack Doc quack Doc Quack Quack quack. Quack quack Quack quack Quack quack, Doc Doc Quack Doc quack
                    quack Doc Quack. Quack Quack Doc Quack Quack Quack Doc. Quack Quack Quack Doc Quack quack quack quack.
                    Doc Quack Doc, quack quack Doc Quack Quack Doc Quack Quack Doc.
                </p>
            </div>
        </div>
    )
}

export default About;