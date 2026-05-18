import React from 'react';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-title">
        <h3>{product.name}</h3>
        <span className="tag">{product.origin}</span>
      </div>
      <p className="desc">{product.description}</p>
      <div className="product-footer">
        <span className="price">${product.price.toFixed(2)}</span>
      </div>
    </article>
  );
}
