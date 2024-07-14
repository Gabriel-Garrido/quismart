import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';


function StudentEvaluationDetail({ studentGroup }) {
  const { studentId } = useParams();
  const [thisStudentGroupEvaluations, setThisStudentGroupEvaluations] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentGroupEvaluations = async () => {
      if (!studentId || !studentGroup?.id) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/ecoe/students/${studentId}/evaluation-groups/${studentGroup.id}/evaluations/`
        );
        setThisStudentGroupEvaluations(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentGroupEvaluations();
  }, [studentId, studentGroup]);

  if (loading) return <DotLoader loading={loading} size={20} color="#ffffff" class="w-3 h-3 text-white ms-2"/>;
  if (error) return <div>Error: {error.message}</div>;

  const averageScore = thisStudentGroupEvaluations.reduce((acc, evaluation) => acc + evaluation.station_score, 0) / thisStudentGroupEvaluations.length;

  return (
    <div>
      <div className="flex">
        <h2 className="text-2xl font-bold text-primary-blue mb-2">{studentGroup.date}</h2>
        <span className="ms-4 text-center font-bold me-2 py-1 px-2.5 rounded bg-primary-blue text-black">
          Promedio puntajes: {averageScore.toFixed(2)}
        </span>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-1 pe-3">Número de estación</th>
              <th scope="col" className="px-6 py-3">Descripción</th>
              <th scope="col" className="px-6 py-3">Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {thisStudentGroupEvaluations.map((studentGroupEvaluation) => (
              <tr key={studentGroupEvaluation.station.id} className="border-b bg-gray-800 border-gray-700">
                <th scope="row" className="px-6 py-2 font-medium text-white whitespace-nowrap">
                  {studentGroupEvaluation.station.name}
                </th>
                <td className="px-6 py-2">{studentGroupEvaluation.station.description}</td>
                <td className="px-6 py-2">{studentGroupEvaluation.station_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentEvaluationDetail;
