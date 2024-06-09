import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const data = {
  labels: Array.from({ length: 15 }, (_, i) => `Product ${i + 1}`),
  datasets: [
    {
      data: Array.from({ length: 15 }, (_, i) => Math.floor(Math.random() * 30) + 1),
      backgroundColor: Array.from({ length: 15 }, (_, i) =>
        i % 2 === 0 ? 'rgba(255, 99, 132, 0.5)' : 'rgba(255, 159, 64, 0.5)'
      ),
    },
  ],
};

const data2 = {
  labels: ['State 1', 'State 2', 'State 3', 'State 4', 'State 5', 'State 6', 'State 7', 'State 8', 'State 9', 'State 10', 'State 11', 'State 12', 'State 13', 'State 14', 'State 15'],
  datasets: [
    {
      label: 'A',
      data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      backgroundColor: '#FFEB3B',
    },
    {
      label: 'B',
      data: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],
      backgroundColor: '#FFC107',
    },
    {
      label: 'C',
      data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
      backgroundColor: '#FF9800',
    },
    {
      label: 'D',
      data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
      backgroundColor: '#FF5722',
    },
    {
      label: 'E',
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
      backgroundColor: '#F44336',
    },
    {
      label: 'F',
      data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
      backgroundColor: '#D32F2F',
    },
  ],
};

const genderData = {
  labels: ['MALE', 'FEMALE', 'OTHER'],
  datasets: [
    {
      data: [58, 35, 7],
      backgroundColor: ['#FF0000', '#FFEB3B', '#FFECB3'],
    },
  ],
};

const ageData = {
  labels: ['26 - 50', '51 - 60', '60+', '18 - 25'],
  datasets: [
    {
      data: [45, 35, 15, 5],
      backgroundColor: ['#FF5722', '#FFC107', '#FFEB3B', '#FFF9C4'],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Product Sales Data',
    },
  },
};

const options2 = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Customer Count by State',
    },
  },
};

const genderOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Gender Representation',
    },
  },
};

const ageOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Age Representation',
    },
  },
};

const Dashboard = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Bar data={data} options={options} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Bar data={data2} options={options2} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: '45%' }}>
          <Doughnut data={genderData} options={genderOptions} />
        </div>
        <div style={{ width: '45%' }}>
          <Doughnut data={ageData} options={ageOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;