import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="background-image"></div>
            <div className="hero-overlay">
                <img
                    src="images/logo_with_name.png"
                    alt="ForgeLab"
                    className="hero-image"
                />
                {/* <h2 className="hero-subtitle">Create -> Simulate, Innvoate</h2> */}
                <h2 className="hero-subtitle">
                    Create <ArrowForwardIcon /> Simulate <ArrowForwardIcon /> Innovate
                </h2>
                <p className="hero-description">
                Design and assemble custom surgical tools using modular building blocks. Utilize immersive XR-enabled multi-platform support to prototype, test, and perfect your innovations for manufacturing.
                </p>
                <div className="cta-container">
                    <button className="cta-button">Experience the Demo</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
