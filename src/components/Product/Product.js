import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="product">
            <h2>Explore Our VR Toolkit</h2>
            <div className="product-features">
                <div className="feature-card" data-aos="flip-left">
                    <h3>Drag-and-Drop UI</h3>
                    <p>Design surgical tools effortlessly in a VR environment.</p>
                </div>
                <div className="feature-card" data-aos="flip-right">
                    <h3>Customizable Components</h3>
                    <p>Adjust length, width, and more with ease.</p>
                </div>
                <div className="feature-card" data-aos="flip-left">
                    <h3>Full Unity Integration</h3>
                    <p>Seamlessly work with Unity for a robust experience.</p>
                </div>
                <div className="feature-card" data-aos="flip-right">
                    <h3>Interactive 3D Environment</h3>
                    <p>Engage with VR elements in real-time.</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
