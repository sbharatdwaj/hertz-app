import React, { useEffect } from 'react';
import ProductShowcase from '../../../components/features/ProductShowcase/ProductShowcase';
import TechSpecs from '../../../components/features/TechSpecs/TechSpecs';
import './SensorModule.module.css';

const SensorModule = () => {
    useEffect(() => {
        // Initialize any necessary data or effects here
        console.log('Sensor Module component mounted');
    }, []);

    return (
        <div className="sensor-module-container">
            <h1>Sensor Module</h1>
            <p>Explore our advanced sensor module designed for various applications in satellite technology.</p>
            <ProductShowcase />
            <TechSpecs />
        </div>
    );
};

export default SensorModule;