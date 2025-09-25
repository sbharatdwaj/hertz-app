import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

// Function to fetch products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Function to fetch product details by ID
export const fetchProductDetails = async (productId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product details for ID ${productId}:`, error);
        throw error;
    }
};

// Function to fetch technical specifications
export const fetchSpecifications = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/specifications`);
        return response.data;
    } catch (error) {
        console.error('Error fetching specifications:', error);
        throw error;
    }
};

// Function to fetch navigation data
export const fetchNavigationData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/navigation`);
        return response.data;
    } catch (error) {
        console.error('Error fetching navigation data:', error);
        throw error;
    }
};