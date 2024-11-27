import axios from 'axios';

const API_URL = 'http://localhost:4000/api/products';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const createProduct = async (formData) => {
    try {
        const response = await axios.post(API_URL, formData);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        return null;
    }
} ;
