// src/components/AdvantageCard.js
import React from 'react';

const AdvantageCard = ({ title, description }) => {
  return (
    <div className="bg-dark-secondary p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-secondary-green mb-2">{title}</h3>
      <p className="text-secondary-text">{description}</p>
    </div>
  );
};

export default AdvantageCard;
