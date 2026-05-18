import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ storeInfo }) {
  return (
    <main className="home-page">
      <section className="hero-card">
        <div>
          <span className="eyebrow">Welcome to</span>
          <h1>{storeInfo.name || 'Coffee R Us'}</h1>
          <p>{storeInfo.description || 'The go-to store for your coffee needs.'}</p>
        </div>
        <div className="hero-actions">
          <Link to="/shop" className="hero-button">Browse Shop</Link>
          <Link to="/admin" className="hero-button secondary">Add Product</Link>
        </div>
      </section>

      <section className="home-welcome-cards">
        <article className="feature-card">
          <h2>Home</h2>
          <p>See store details, featured updates, and the latest coffee messaging.</p>
        </article>
        <article className="feature-card">
          <h2>Shop</h2>
          <p>Search products, explore our coffee selection, and filter by origin.</p>
        </article>
        <article className="feature-card">
          <h2>Admin Portal</h2>
          <p>Add new coffee products quickly and keep your store listings fresh.</p>
        </article>
      </section>
    </main>
  );
}
