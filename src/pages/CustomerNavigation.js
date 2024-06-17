import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './CustomerNavigation.css'; // Import the CSS file
import RegionCard from './RegionCard'; // Import the RegionCard component

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
  const [selectedOccupation, setSelectedOccupation] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleFilter = () => {
    // Fetch and filter customers based on selectedSource, selectedOccupation, selectedRegion, searchBy, and searchValue
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

  return (
    <div className="container">
      <h2>Customer Navigation</h2>

      <div className="card">
        <h3>Yearly Customer Trend</h3>
        <Line data={chartData} />
      </div>

      <div className="card">
        <h3>Top 3 Leading Occupations</h3>
        <ul>
          {topOccupations.map((occupation, index) => (
            <li key={index}>{occupation}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Top 3 Regions</h3>
        <div className="region-cards">
          {topRegions.map((regionData, index) => (
            <RegionCard key={index} region={regionData.region} customers={regionData.customers} />
          ))}
        </div>
      </div>

      <div className="filter-container">
        <h2>Filter Customers</h2>
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
            Occupation:
            <input
              type="text"
              value={selectedOccupation}
              onChange={e => setSelectedOccupation(e.target.value)}
              placeholder="Search Occupation"
            />
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

        <div className="filter-group">
          <label>
            Search By:
            <select value={searchBy} onChange={e => setSearchBy(e.target.value)}>
              <option value="">Select</option>
              <option value="customerId">Customer ID</option>
              <option value="email">Email</option>
            </select>
          </label>
          <input
            type="text"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Enter Customer ID or Email"
          />
        </div>

        <button onClick={handleFilter}>Filter</button>
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