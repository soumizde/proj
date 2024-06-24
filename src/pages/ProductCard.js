import React from 'react';
import './ProductCard.css';

const ProductCard = ({ productName, totalCustomers, percentageChange }) => {
  return (
    <div className="product-card">
      <h3>{productName}</h3>
      <p>Total Customers</p>
      <h2>{totalCustomers}</h2>
      <p className={`percentage-change ${percentageChange >= 0 ? 'positive' : 'negative'}`}>
        {percentageChange >= 0 ? `+${percentageChange}%` : `${percentageChange}%`}
      </p>
    </div>
  );
};

export default ProductCard;