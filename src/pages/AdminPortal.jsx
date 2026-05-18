import React, { useState } from 'react';

export default function AdminPortal({ setProducts }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      price: parseFloat(formData.price)
    };

    fetch('http://localhost:3000/coffee', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(savedProduct => {
        setProducts(prev => [...prev, savedProduct]);
        setFormData({ name: '', description: '', origin: '', price: '' });
        alert('Product successfully added to database!');
      })
      .catch(() => {
        alert('Unable to add product. Please try again later.');
      });
  };

  return (
    <main className="admin-page">
      <section className="page-header">
        <div>
          <span className="eyebrow">Admin Portal</span>
          <h1>Manage your coffee catalog</h1>
          <p>Submit new products with a clean form and keep the shop inventory updated.</p>
        </div>
      </section>

      <section className="admin-form-wrapper">
        <div className="admin-form-panel">
          <h2>New product details</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <label>
              Name
              <input name="name" placeholder="Coffee name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Description
              <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
            </label>
            <label>
              Origin
              <input name="origin" placeholder="Origin" value={formData.origin} onChange={handleChange} required />
            </label>
            <label>
              Price
              <input name="price" type="number" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} required />
            </label>
            <button type="submit">Save Product</button>
          </form>
        </div>
      </section>
    </main>
  );
}
