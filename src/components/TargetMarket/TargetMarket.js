import React from 'react';
import './TargetMarket.css';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import AndroidIcon from '@mui/icons-material/Android';
import StarsIcon from '@mui/icons-material/Stars';

const TargetMarket = () => {
    return (
        <div className="target-market">
            <h2>Target Market</h2>
            <div className="benefits-grid">
                <div className="benefit-item" data-aos="zoom-in">
                    <div className="icon">
                    <MedicalInformationIcon fontSize="large" />
                    </div>
                    <h3>Surgeons and Surgical Innovators</h3>
                </div>
                <div className="benefit-item" data-aos="zoom-in">
                    <div className="icon">
                    <LocalHospitalIcon fontSize="large" />
                    </div>
                    <h3>Medical Device Companies</h3>
                </div>
                <div className="benefit-item" data-aos="zoom-in">
                    <div className="icon">
                    <SchoolIcon fontSize="large" />
                    </div>
                    <h3>Educational and Research Institutions</h3>
                </div>
                <div className="benefit-item" data-aos="zoom-in">
                    <div className="icon">
                    <AndroidIcon fontSize="large" />
                    </div>
                    <h3>Robotics and Engineering Professionals</h3>
                </div>
                <div className="benefit-item" data-aos="zoom-in">
                    <div className="icon">
                    <StarsIcon fontSize="large" />
                    </div>
                    <h3>And many more...</h3>
                </div>
            </div>
            <div className="why-us-banner">
                <h3>Why Us?</h3>
                <p>
                The demand for customizable surgical tools is growing rapidly. ForgeLab empowers you to lead the market with precision, adaptability, and innovation. With quick design capabilities and precise, customizable prototyping, ForgeLab enables you to create surgical tools tailored to the most demanding medical requirements, ensuring you stay ahead in the evolving healthcare landscape.
                </p>
            </div>
        </div>
    );
};

export default TargetMarket;
