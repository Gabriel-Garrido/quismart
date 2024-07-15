import React from "react";
import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <Link to={`/students/${student.id}`}>
      <div className="bg-dark-secondary px-6 py-1 rounded-lg border border-neutral-700 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-secondary-green">
          {student.name} {student.last_name}
        </h2>
        <p className="text-secondary-text">{student.email}</p>
      </div>
    </Link>
  );
}

export default StudentCard;
