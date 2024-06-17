import React from 'react';
import './RegionCard.css'; // Import the CSS file for styling

const RegionCard = ({ region, customers }) => {
  return (
    <div className="region-card">
      <h4>{region}</h4>
      <p>{customers}</p>
    </div>
  );
};

export default RegionCard;