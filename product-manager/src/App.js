import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';
import { fetchProducts, createProduct } from './services/productService';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await fetchProducts();
        setProducts(data);
    };

    const handleAddProduct = async (formData) => {
        const newProduct = await createProduct(formData);
        if (newProduct) {
            setProducts((prev) => [...prev, newProduct]);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Product Manager</h1>
            <ProductForm onAddProduct={handleAddProduct} />
            <div className="mt-4 d-flex flex-wrap">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default App ;
