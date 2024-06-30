import React from 'react';
import { Link } from 'react-router-dom';

function StudentCard({ student }) {
  return (
    <div className="bg-dark-secondary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-secondary-green mb-2">{student.name} {student.last_name}</h2>
      <p className="text-secondary-text mb-4">{student.email}</p>
      <Link to={`/students/${student.id}`} className="bg-secondary-green text-dark-bg py-2 px-4 rounded hover:bg-highlight transition duration-300">
        Ver más
      </Link>
    </div>
  );
}

export default StudentCard;
