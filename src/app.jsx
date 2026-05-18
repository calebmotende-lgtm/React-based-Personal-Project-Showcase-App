import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AdminPortal from './pages/AdminPortal';

function App() {
  const [products, setProducts] = useState([]);
  const [storeInfo, setStoreInfo] = useState({});

  // Centralized Data Fetching (GET request)
  useEffect(() => {
    fetch('http://localhost:3000') // json-server serves the full database at the root URL
      .then(res => res.json())
      .then(data => {
        setProducts(data.coffee);
        setStoreInfo(data.store_info);
      })
      .catch(error => {
        console.error('Failed to load data:', error);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home storeInfo={storeInfo} />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/admin" element={<AdminPortal setProducts={setProducts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;