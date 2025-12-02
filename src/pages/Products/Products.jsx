import React, { useState } from 'react'
import './Products.css'

function Products() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');

  const products = [
    { id: 1, name: 'iPhone 16 Pro Max', price: 1299, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97' },
    { id: 2, name: 'Samsung S24 Ultra', price: 1199, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
    { id: 3, name: 'AirPods Pro 2', price: 249, img: 'https://images.unsplash.com/photo-1588421357574-4b133844f55d' },
    { id: 4, name: 'MacBook Pro 14', price: 1999, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
    { id: 5, name: 'iPad Pro 2024', price: 1399, img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5' },
    { id: 6, name: 'Asus ROG Laptop', price: 1599, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
    { id: 7, name: 'Sony WH-1000XM5', price: 399, img: 'https://images.unsplash.com/photo-1580894908361-967195033215' }
  ];

  const filtered = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'price_low') return a.price - b.price;
      if (sort === 'price_high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="products">
      <h2>Products</h2>

      <div className="control">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="default">Sort</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid">
        {filtered.map(item => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;