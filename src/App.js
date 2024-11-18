import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero/Hero';
import ProductDetails from './components/ProductDetails/ProductDetails';
import UseCases from './components/UseCases/UseCases';
import Contact from './components/Contact/Contact';
import TargetMarket from './components/TargetMarket/TargetMarket';
import MarketPotential from './components/MarketPotential/MarketPotential';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="App">
            <Hero />
            <AboutUs />
            <ProductDetails />
            <TargetMarket />
            <UseCases />
            <MarketPotential />
            <Contact />
        </div>
    );
}

export default App;
