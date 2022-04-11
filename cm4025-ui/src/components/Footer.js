import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <TwitterIcon /> <LinkedInIcon />
            </div>
            <p>LFTU Group 2022</p>
        </div>
    );
}

export default Footer;