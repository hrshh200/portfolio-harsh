import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import "./Projects.css";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            }
        ]
    };

    const slides = [
        { id: 1, title: 'MedOCR', className: 'slide1', gitlink: "https://github.com/hrshh200/MedOCR", prolink: "https://med-ocr-pied.vercel.app/" },
        { id: 2, title: 'Prescription Generator', className: 'slide2', gitlink: "https://github.com/hrshh200/Pres-Generator", prolink: "https://pres-generator.vercel.app/" },
        { id: 3, title: 'Language Translation', className: 'slide3', gitlink: "https://github.com/hrshh200/Language-Translation", prolink: "https://language-translation-brown.vercel.app/" },
        { id: 4, title: 'Heart Disease Prediction', className: 'slide4', gitlink: "https://github.com/hrshh200/Heart-Disease-Prediction", prolink: "https://heart-disease-prediction-lake.vercel.app/" },
        { id: 5, title: 'CRUD Supabase Example', className: 'slide5', gitlink: "https://github.com/hrshh200/crud_supabase", prolink: "https://crud-supabase-theta.vercel.app/" },
    ];

    return (
        <div className="project-me-section" id="project">
            <h2>Projects</h2>
            <div className="carousel-container">
                <Slider {...settings}>
                    {slides.map(slide => (
                        <div key={slide.id} className={`slide ${slide.className}`}>
                            <h3 className="slide-title">{slide.title}</h3>
                            <div className="button-container">
                                <a href={slide.gitlink}><Button>View on Github</Button></a>
                                <a href={slide.prolink}><Button>View Project</Button></a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Projects;
