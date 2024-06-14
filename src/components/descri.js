import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import photoself from "./photos/self.jpg";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiHackerrank } from "react-icons/si";
import "./descri.css";

const Descri = () => {
    return (
        <div className="container" id="des-con">
            <div className="card">
                <div className="icon-container">
                    <a href="https://www.instagram.com/harshsharma_54/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon className="custom-instagram-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/harsh-sharma-254a91249/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="custom-linkedin-icon" />
                    </a>
                    <a href="https://github.com/hrshh200" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="custom-github-icon" />
                    </a>
                    <a href="https://leetcode.com/u/Hrsh_123/" target="_blank" rel="noopener noreferrer">
                        <TbBrandLeetcode className="custom-leetcode-icon" />
                    </a>
                    <a href="https://www.hackerrank.com/profile/hsharmarishra" target="_blank" rel="noopener noreferrer">
                        <SiHackerrank className="custom-hackerrank-icon" />
                    </a>
                </div>
                <div className="card-text">
                    <h1 className="title-h">Hello!</h1>
                    <h1 className="title-n">My Name is Harsh Sharma</h1><br /><br />
                    <h1 className="title-p">Machine Learning | Web Developer</h1><br /><br />
                </div>
                <div className="card-image-container">
                    <img className="profile-image" src={photoself} alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default Descri;
