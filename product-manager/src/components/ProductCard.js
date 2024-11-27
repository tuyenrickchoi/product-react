import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
            <img
                src={`http://localhost:4000/${product.image}`}
                className="card-img-top"
                alt={product.name}
            />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
            </div>
        </div>
    );
}

export default ProductCard ;
