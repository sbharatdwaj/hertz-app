import React from 'react';
import ProductShowcase from '../../../components/features/ProductShowcase/ProductShowcase';
import TechSpecs from '../../../components/features/TechSpecs/TechSpecs';
import './ComputingDevice.module.css';

const ComputingDevice = () => {
    const productData = {
        name: "HertZ Edge™ Micro",
        tagline: "Compact. Powerful. Space-Ready.",
        description: "High-performance edge computing solutions designed for satellite IoT applications. Our compact, energy-efficient devices enable powerful data processing in the most remote environments.",
        images: [
            // Add image URLs here
            "/assets/images/products/computing-device-1.jpg",
            "/assets/images/products/computing-device-2.jpg",
            "/assets/images/products/computing-device-3.jpg"
        ],
        specifications: {
            weight: "1.5 kg",
            dimensions: "10 x 10 x 5 cm",
            power: "12V DC",
            connectivity: "Wi-Fi, Bluetooth, Ethernet"
        }
    };

    return (
        <div className="computing-device-page">
            <h1>{productData.name}</h1>
            <p>{productData.tagline}</p>
            <ProductShowcase 
                images={productData.images} 
                description={productData.description} 
            />
            <TechSpecs specifications={productData.specifications} />
        </div>
    );
};

export default ComputingDevice;