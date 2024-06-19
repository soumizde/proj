import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';
import usStatesTopo from './usStatesTopo.json'; // Adjust the path as necessary

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const productSubtypes = {
  Trading: ['Stocks', 'Bonds', 'ETF', 'MF', 'Options', 'Futures'],
  Annuity: ['Fixed', 'Variable', 'Indexed', 'Immediate'],
  'Alternative investments': ['Real estate investments', 'Private equity', 'Hedge funds']
};

const productCategories = ['Advisory', 'Foreign', 'IRA', 'Non Operating', 'Roll over qualified', 'Retirement account', 'Omnibus'];

const stateProductData = {
  "AL": 60, "AK": 30, "AZ": 88, "AR": 55, "CA": 150,
  "CO": 92, "CT": 70, "DE": 45, "FL": 120, "GA": 95,
  "HI": 40, "ID": 52, "IL": 90, "IN": 75, "IA": 65,
  "KS": 60, "KY": 70, "LA": 80, "ME": 50, "MD": 85,
  "MA": 100, "MI": 75, "MN": 85, "MS": 55, "MO": 80,
  "MT": 45, "NE": 50, "NV": 55, "NH": 60, "NJ": 110,
  "NM": 49, "NY": 160, "NC": 65, "ND": 40, "OH": 70,
  "OK": 65, "OR": 68, "PA": 85, "RI": 55, "SC": 65,
  "SD": 40, "TN": 75, "TX": 130, "UT": 61, "VT": 45,
  "VA": 80, "WA": 80, "WV": 50, "WI": 75, "WY": 40
};

const colorScale = scaleQuantize()
  .domain([0, 160])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

const performanceData = {
  labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Total Customers',
      data: [120, 150, 180, 210, 230, 250, 270, 290, 310, 330], // Example data
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};

const ageData = {
  labels: ['18-25', '26-35', '36-45', '46-55', '56+'],
  datasets: [
    {
      label: 'Age Distribution',
      data: [300, 500, 400, 300, 200], // Example data
      backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
    }
  ]
};

const genderData = {
  labels: ['Male', 'Female', 'Other'],
  datasets: [
    {
      label: 'Gender Distribution',
      data: [700, 800, 100], // Example data
      backgroundColor: ['blue', 'pink', 'purple'],
    }
  ]
};

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

  const sortedStates = Object.entries(stateProductData).sort((a, b) => b[1] - a[1]);
  const topThreeStates = sortedStates.slice(0, 3);
  const bottomThreeStates = sortedStates.slice(-3);

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ width: "100%", maxWidth: 1150, height: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>State Product Data</h2>
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 1000 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={usStatesTopo}>
            {({ geographies }) =>
              geographies.map(geo => {
                const cur = stateProductData[geo.properties.STUSPS];
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={cur ? colorScale(cur) : "#EEE"}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {colorScale.range().map((color, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: color, marginRight: '10px' }} />
              <span>{index * 20}-{(index + 1) * 20}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: 'center' }}>
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
      <Line data={performanceData} />
      <div>
        <h3>Top Performing States</h3>
        {topThreeStates.map(state => <p>{state[0]}: {state[1]}</p>)}
        <h3>Lowest Performing States</h3>
        {bottomThreeStates.map(state => <p>{state[0]}: {state[1]}</p>)}
      </div>
      <div>
        <Pie data={ageData} />
        <Pie data={genderData} />
      </div>
    </div>
  );
};

export default ProductAnalytics;
