// src/services/productService.js

const products = [
    {
        id: 1,
        name: "Sensor Module",
        description: "Advanced sensor module for satellite applications.",
        images: [
            "/assets/images/products/sensor-module-1.jpg",
            "/assets/images/products/sensor-module-2.jpg"
        ],
        specifications: {
            weight: "1.5 kg",
            dimensions: "10 x 10 x 5 cm",
            power: "5W"
        }
    },
    {
        id: 2,
        name: "Satellite",
        description: "High-performance satellite for diverse missions.",
        images: [
            "/assets/images/products/satellite-1.jpg",
            "/assets/images/products/satellite-2.jpg"
        ],
        specifications: {
            weight: "150 kg",
            dimensions: "100 x 100 x 50 cm",
            power: "200W"
        }
    },
    {
        id: 3,
        name: "Computing Device",
        description: "Edge computing device for real-time data processing.",
        images: [
            "/assets/images/products/computing-device-1.jpg",
            "/assets/images/products/computing-device-2.jpg"
        ],
        specifications: {
            weight: "2 kg",
            dimensions: "15 x 10 x 5 cm",
            power: "10W"
        }
    }
];

export const getProducts = () => {
    return products;
};

export const getProductById = (id) => {
    return products.find(product => product.id === id);
};