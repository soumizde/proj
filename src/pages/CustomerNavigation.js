import React, { useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './CustomerNavigation.css';
import RegionCard from './RegionCard';
import ProductCard from './ProductCard'; // Import the new ProductCard component

// Sample data
const yearlyTrendData = [
  { year: '2020', customers: 100 },
  { year: '2021', customers: 200 },
  { year: '2022', customers: 300 },
  { year: '2023', customers: 250 },
];

const topOccupations = ['Engineer', 'Doctor', 'Teacher'];
const topRegions = [
  { region: 'Region A', customers: 1200 },
  { region: 'Region B', customers: 780 },
  { region: 'Region C', customers: 680 },
];

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const sourcesOfWealth = [
  'SavingsFromEarnings', 'BusinessRevenue', 'SalesOfAsset', 'AssociatedPerson', 'SalaryWages', 'Inheritance', 'BusinessOpsIncomeRevenue',
  'DonationsTrustsOnly', 'SaleOfBusiness', 'SaleOfRealEstate', 'SaleOfAssetorInvestment', 'LegalInsuranceSettlement', 'InvestmentIncome',
  'RetirementFunds', '401kRollover'
];

const CustomerNavigation = () => {
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filterType, setFilterType] = useState(''); // New state for filter type

  const handleFilter = () => {
    // Fetch and filter customers based on selectedSource, selectedRegion, searchBy, and searchValue
    // This is a placeholder for actual data filtering logic
    const filtered = []; // Assume this array is filled with filtered data
    setFilteredCustomers(filtered);
  };

  const chartData = {
    labels: yearlyTrendData.map(data => data.year),
    datasets: [
      {
        label: 'Yearly Customer Trend',
        data: yearlyTrendData.map(data => data.customers),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const occupationData = {
    labels: topOccupations,
    datasets: [
      {
        data: [30, 50, 20], // Example data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        cutout: '70%', // Hollow effect
      },
    ],
  };

  const ageDistributionData = {
    labels: ['18-25', '26-35', '36-45', '46-60', '60+'],
    datasets: [
      {
        data: [10, 20, 30, 25, 15], // Example data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        cutout: '70%', // Hollow effect
      },
    ],
  };

  const genderDistributionData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        data: [60, 35, 5], // Example data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        cutout: '70%', // Hollow effect
      },
    ],
  };

  return (
    <div className="container">
      <h2>Customer Navigation</h2>

      <div className="filter-container">
        <h2>Filter Options</h2>
        <div className="filter-group">
          <label>
            Filter Type:
            <select value={filterType} onChange={e => setFilterType(e.target.value)}>
              <option value="">Select</option>
              <option value="findCustomer">Find a Customer</option>
              <option value="findBase">Find the Customer Base</option>
            </select>
          </label>
        </div>

        {filterType === 'findBase' && (
          <div className="filter-group-row">
            <div className="filter-group">
              <label>
                Source of Wealth:
                <select value={selectedSource} onChange={e => setSelectedSource(e.target.value)}>
                  <option value="">Select</option>
                  {sourcesOfWealth.map(source => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="filter-group">
              <label>
                Region:
                <select value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
                  <option value="">Select</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </label>
            </div>
            <button className="button" onClick={handleFilter}>Filter</button>
          </div>
        )}

        {filterType === 'findCustomer' && (
          <div className="filter-group-row">
            <div className="filter-group">
              <label>
                Search By:
                <select value={searchBy} onChange={e => setSearchBy(e.target.value)}>
                  <option value="">Select</option>
                  <option value="customerId">Customer ID</option>
                  <option value="email">Email</option>
                </select>
              </label>
            </div>
            <div className="filter-group">
              <input
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="Enter Customer ID or Email"
              />
            </div>
          </div>
        )}
      </div>

      <div className="card">
        <h3>Yearly Customer Trend</h3>
        <Line data={chartData} />
      </div>

      <div className="card">
        <h3>Occupation Split</h3>
        <div className="occupation-split">
          <div className="small-chart-container">
            <Pie data={occupationData} />
          </div>
          <div className="top-occupations">
            <h4>Top 3 Occupations</h4>
            <div className="product-cards">
              {topOccupations.map((occupation, index) => (
                <ProductCard key={index} productName={occupation} totalCustomers={index * 10 + 20} percentageChange={index * 2.5} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>State Heatmap</h3>
        <div className="heatmap-placeholder">
          {/* Heatmap logic to be implemented */}
        </div>
      </div>

      <div className="card">
        <h3>Top 3 Most Valuable Products</h3>
        <div className="product-cards">
          <ProductCard productName="Product A" totalCustomers={150} percentageChange={5.2} />
          <ProductCard productName="Product B" totalCustomers={120} percentageChange={3.8} />
          <ProductCard productName="Product C" totalCustomers={100} percentageChange={2.5} />
        </div>
      </div>

      <div className="card">
        <h3>Age and Gender Distribution</h3>
        <div className="distribution-charts">
          <div className="chart-container">
            <h4>Age Distribution</h4>
            <Pie data={ageDistributionData} />
          </div>
          <div className="chart-container">
            <h4>Gender Distribution</h4>
            <Pie data={genderDistributionData} />
          </div>
        </div>
      </div>

      <div className="filtered-customers">
        <h2>Filtered Customers</h2>
        <p>Total Numbers of Customers in the category: {filteredCustomers.length}</p>
        <div>
          <h4>Product Split</h4>
          {/* Product Split logic to be implemented */}
        </div>
      </div>
    </div>
  );
};

export default CustomerNavigation;
