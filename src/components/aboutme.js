import React from "react";
import "./aboutme.css";
import aboutphoto from "./photos/aboutself.jpg";
import { Button } from "@mui/material";

const aboutme = () => {
    return (
        <div className="about-me-section" id="about">
            <h2>About Me</h2>
            <div className="about-dis">
                <p>Hello, I'm Harsh Sharma, a dedicated and motivated individual currently pursuing my Bachelor of Technology (B.Tech) degree in Information Technology from the esteemed Heritage Institute of Technology, Kolkata. Currently in my third year of studies, I am deeply passionate about technology and its applications in solving real-world problems.

                    Throughout my academic journey, I have consistently demonstrated a strong aptitude for IT concepts and a keen interest in exploring the latest advancements in the field. I am enthusiastic about learning new technologies and methodologies that drive innovation in the digital landscape.

                </p>
                <img src={aboutphoto} alt="About Me" /><br />
                <a href="https://www.linkedin.com/in/harsh-sharma-254a91249/overlay/1717683775211/single-media-viewer/?profileId=ACoAAD2P6SABxCYLVTtZ2q9wiM4FLgO7NHu0fy8" target="_blank" rel="noopener noreferrer"><Button>Download Resume</Button></a>
            </div>
        </div>
    );
}

export default aboutme;