import React from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
    return (
        <div className="product">
            <h2>Explore ForgeLab</h2>
            <div className="product-features-alternate">
                <div className="feature-section">
                    <div className="feature-icon" data-aos="fade-up">
                        🔧
                    </div>
                    <div className="feature-content">
                        <h3>Build Custom Tools</h3>
                        <p>Easily design and assemble robotic tools using our intuitive drag-and-drop interface. Choose from manipulators, sensors, and end effectors tailored to your needs.</p>
                    </div>
                </div>
                <div className="feature-section">
                    <div className="feature-icon" data-aos="fade-up">
                        🕶️
                    </div>
                    <div className="feature-content">
                        <h3>Multi-Platform Support</h3>
                        <p>Step into an immersive XR environment or desktop applcation to assemble and visualize your robotic tools in a virtual operating room.</p>
                    </div>
                </div>
                <div className="feature-section">
                    <div className="feature-icon" data-aos="fade-up">
                        🛠️
                    </div>
                    <div className="feature-content">
                        <h3>Simulation and Testing</h3>
                        <p>Test tool behavior in real-time simulations, predict performance, and refine designs before moving to physical prototyping for efficient development.</p>
                    </div>
                </div>
                <div className="feature-section">
                    <div className="feature-icon" data-aos="fade-up">
                        📦
                    </div>
                    <div className="feature-content">
                        <h3>Seamless Integration</h3>
                        <p>Export designs for 3D printing or CAD software to seamlessly integrate and utilize tools with existing surgical equipment for testing and deployment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
