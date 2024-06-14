import React from "react";
import "./skills.css";

const Skills = () => {
    const ml = [
        'Python',
        'Open-CV',
        'FlaskAPI',
        'Tensorflow.js',
        'Keras',
        'ML Libraries(Numpy, Pandas, Scikit-learn)',
        'Pytesseract'
    ];
    const fe = [
        'HTML',
        'CSS',
        'Javascript',
        'React.js',
        'React Native',
    ];
    const bc = [
        'Node.js',
        'Express.js',
        'SQL',
        'PostgreSQL',
        'MongoDB',
    ];
    return (
        <div className="skills-me-section" id="skill">
            <h2>Skills & Tools</h2>
            <div className="card-skills-container">
                <div className="card-skills">
                    <h3 className="card-skills-title">Machine Learning</h3>
                    <ul className="list">
                        {ml.map((item, index) => (
                            <li key={index} className="list-item">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="card-skills">
                    <h3 className="card-skills-title">Frontend</h3>
                    <ul className="list">
                        {fe.map((item, index) => (
                            <li key={index} className="list-item">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="card-skills">
                    <h3 className="card-skills-title">Backend</h3>
                    <ul className="list">
                        {bc.map((item, index) => (
                            <li key={index} className="list-item">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
