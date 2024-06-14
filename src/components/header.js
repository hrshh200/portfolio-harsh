import { React } from "react";
import { Link } from "react-scroll";
import "./header.css"

const header = () => {

    return (
        <div className="background-header">
            <div className="header">
                <h1 className="title">My Portfolio</h1>
                <div className="nav-list">
                    <Link to="des-con" spy={true} smooth={true} offset={-100} duration={500}><h2>Home</h2></Link>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}><h2>About Me</h2></Link>
                    <Link to="skill" spy={true} smooth={true} offset={-100} duration={500}><h2>Skills</h2></Link>
                    <Link to="project" spy={true} smooth={true} offset={-100} duration={500}><h2>Projects</h2></Link>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}><h2>Contact</h2></Link>
                </div>
            </div>
        </div>
    );
}

export default header;