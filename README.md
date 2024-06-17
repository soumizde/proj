```
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

// Sample data
const yearlyTrendData = [
  { year: '2020', customers: 100 },
  { year: '2021', customers: 200 },
  { year: '2022', customers: 300 },
  { year: '2023', customers: 250 },
];

const topOccupations = ['Engineer', 'Doctor', 'Teacher'];
const topRegions = ['California', 'Texas', 'New York'];

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

  const handleFilter = () => {
    // Fetch and filter customers based on selectedSource, selectedOccupation, and selectedRegion
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
    <div>
      <h2>Customer Navigation</h2>

      <div>
        <h3>Yearly Customer Trend</h3>
        <Line data={chartData} />
      </div>

      <div>
        <h3>Top 3 Leading Occupations</h3>
        <ul>
          {topOccupations.map((occupation, index) => (
            <li key={index}>{occupation}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Top 3 Regions</h3>
        <ul>
          {topRegions.map((region, index) => (
            <li key={index}>{region}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Filter Customers</h3>
        <div>
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

        <div>
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

        <div>
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

        <button onClick={handleFilter}>Filter</button>
      </div>

      <div>
        <h3>Filtered Customers</h3>
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
```
