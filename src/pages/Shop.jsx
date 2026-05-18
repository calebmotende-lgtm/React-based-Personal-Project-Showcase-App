import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Shop({ products }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="shop-page">
      <section className="page-header">
        <div>
          <span className="eyebrow">Shop</span>
          <h1>Discover your next favorite coffee</h1>
          <p>Search products and explore the selection by flavor, origin, and price.</p>
        </div>
      </section>

      <div className="shop-layout">
        <aside className="sidebar">
          <div className="search-panel">
            <label htmlFor="shop-search">Search products</label>
            <input
              id="shop-search"
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="location-filters">
            <h3>Suggested filters</h3>
            <label><input type="checkbox" /> Colombia</label>
            <label><input type="checkbox" /> Vietnam</label>
            <label><input type="checkbox" /> Ethiopia</label>
          </div>
        </aside>

        <main className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="empty-state">
              <h2>No products found</h2>
              <p>Try a different search term or refresh the list.</p>
            </div>
          )}
        </main>
      </div>
    </main>
  );
}
