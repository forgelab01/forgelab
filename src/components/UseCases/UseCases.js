import React from 'react';
import './UseCases.css';

const UseCases = () => {
    return (
        <div className="use-cases">
            <h2>Real-World Applications</h2>
            <div className="parallax-container">
                <div className="parallax-item">
                    <h3>Prototype Surgical Tools</h3>
                    <p>Quickly prototype and iterate on new surgical tool designs - both robotic and non-robotic.</p>
                </div>
                <div className="parallax-item">
                    <h3>Simulate Tool/Robot Operations</h3>
                    <p>Test tools/robots in simulated surgical scenarios for validation.</p>
                </div>
                <div className="parallax-item">
                    <h3>Collaborative Development</h3>
                    <p>Collaborate with team members in a shared multi-platform environment.</p>
                </div>
            </div>
        </div>
    );
};

export default UseCases;
