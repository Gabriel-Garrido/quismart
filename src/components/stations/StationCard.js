import React from 'react';

function StationCard({ station }) {
  return (
    <div className="p-4 bg-light-bg rounded shadow">
      <h2 className="text-xl font-semibold">{station.name}</h2>
      <p>{station.description}</p>
    </div>
  );
}

export default StationCard;
