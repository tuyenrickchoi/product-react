import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (let key in formData) {
            data.append(key, formData[key]);
        }
        await onAddProduct(data);
        setFormData({ name: '', description: '', price: '', image: null });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    name="price"
                    className="form-control"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    name="image"
                    className="form-control-file"
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    );
}

export default ProductForm ;
