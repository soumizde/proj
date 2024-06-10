```
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const productSubtypes = {
  Trading: ['Stocks', 'Bonds', 'ETF', 'MF', 'Options', 'Futures'],
  Annuity: ['Fixed', 'Variable', 'Indexed', 'Immediate'],
  'Alternative investments': ['Real estate investments', 'Private equity', 'Hedge funds']
};

const productCategories = ['Trust', 'Advisory', 'Foreign', 'IRA', 'Non Operating', 'Roll over qualified', 'Retirement account', 'Omnibus'];

const ProductAnalytics = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSubtype, setSelectedSubtype] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch('/api/products').then(res => res.json());
    setProducts(data);
    setFilteredProducts(data);
  };

  const handleFilterChange = () => {
    let filtered = products;

    if (selectedType) {
      filtered = filtered.filter(product => product.type === selectedType);
    }

    if (selectedSubtype) {
      filtered = filtered.filter(product => product.subtype === selectedSubtype);
    }

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setFilteredProducts(filtered);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setSelectedSubtype('');
    handleFilterChange();
  };

  const handleSubtypeChange = (event) => {
    setSelectedSubtype(event.target.value);
    handleFilterChange();
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    handleFilterChange();
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    handleFilterChange();
  };

  const chartData = {
    labels: filteredProducts.map(product => product.name),
    datasets: [
      {
        label: 'All Products vs All Customers',
        data: filteredProducts.map(product => product.customers.length),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by Product Name"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginRight: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <select
          value={selectedType}
          onChange={handleTypeChange}
          style={{ marginRight: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          <option value="">Select Type</option>
          {Object.keys(productSubtypes).map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <select
          value={selectedSubtype}
          onChange={handleSubtypeChange}
          style={{ marginRight: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          disabled={!selectedType}
        >
          <option value="">Select Subtype</option>
          {(selectedType ? productSubtypes[selectedType] : []).map(subtype => (
            <option key={subtype} value={subtype}>{subtype}</option>
          ))}
        </select>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{ marginRight: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          <option value="">Select Category</option>
          {productCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button
          onClick={handleFilterChange}
          style={{ padding: '10px 20px', backgroundColor: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Apply Filters
        </button>
      </div>
      <Bar data={chartData} />
    </div>
  );
};

export default ProductAnalytics;

```
