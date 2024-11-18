import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="about-us">
            <h2 className="about-title">About Us</h2>
            <div className="parallax-container">
                <div className="parallax-item">
                    <h3 className="parallax-heading">Mission Statement</h3>
                    <p>At ForgeLab, we are bridging the gap between imagination and reality in surgical tool development. Our mission is to empower healthcare professionals, researchers, engineers and students everywhere to learn and create groundbreaking tools that redefine precision and patient care in the operating room.</p>
                </div>
                <div className="parallax-item">
                    <h3 className="parallax-heading">Who We Are</h3>
                    <p>Founded by an expert with over half a decade of experience in robotics, VR, medical and surgical technologies, ForgeLab is driven by a passion for innovation. Combining deep expertise with cutting-edge research, ForgeLab delivers a platform that accelerates the development of next-generation surgical tools.</p>
                </div>
                <div className="parallax-item">
                    <h3 className="parallax-heading">Vision</h3>
                    <p>To revolutionize surgical innovation by making it affordable, accessible, adaptable, collaborative, and future-focused, empowering a new era of enhanced precision and patient care.</p>
                </div>
            </div>
            <div className="expand-button-container">
                <button className="expand-button" onClick={toggleExpand}>
                    {isExpanded ? 'Collapse ▲' : 'Learn More ▼'}
                </button>
            </div>
            {isExpanded && (
                <div className="hidden-block">
                    <div className="hidden-block-content">
                        <div className="hidden-block-image">
                            <img src="images/karthik.jpeg" alt="Karthik Koundinya" />
                        </div>
                        <div className="hidden-block-text">
                            <h3>More About Us</h3>
                            <p>I am Karthik Koundinya, a Robotics graduate student at Georgia Tech. With about half a decade of professional experience at both startup and mid-sized organisations, I bring a blend of expertise in medical devices, medical/surgical robotics, AR/VR/XR development, software engineering, and mechanical design.</p>

                            <p>This past summer, I had the privilege of interning at the Wake Forest School of Medicine, where I focused on surgical robotics research. This experience reinforced my commitment to advancing healthcare through technology and offered valuable opportunities to contribute to cutting-edge research.</p>

                            <p>I founded ForgeLab to bring this vision to life—creating innovative tools and solutions that make healthcare more effective, empathetic, and accessible. ForgeLab pledges to push the boundaries of surgical robotics, medical AI, and immersive technologies, striving to deliver advancements that improve patient outcomes and redefine what is possible in the medical field.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutUs;
