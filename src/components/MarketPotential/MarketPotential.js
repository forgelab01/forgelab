import React from 'react';
import './MarketPotential.css';

const MarketPotential = () => {
    return (
        <div className="market-potential">
            <h2>Market Potential</h2>
            <div className="booming-industry">
                <h3>A Booming Industry</h3>
                <p>
                    The surgical robotics market is expected to reach <span className="highlight">$22.2 billion</span> by 2028,
                    driven by the increasing need for minimally invasive procedures and precision tools. ForgeLab positions itself
                    at the forefront of this revolution by enabling faster, more cost-effective innovation.
                </p>
            </div>
            <div className="key-metrics">
                <h3>Key Metrics</h3>
                <div className="metrics-grid">
                    <div className="metric-card">
                        <span className="stat">50%</span>
                        <p>Reduction in prototyping time</p>
                    </div>
                    <div className="metric-card">
                        <span className="stat">40%</span>
                        <p>Cut in development costs</p>
                    </div>
                    <div className="metric-card">
                        <span className="stat">Accelerate</span>
                        <p>Design-to-market timelines</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketPotential;
