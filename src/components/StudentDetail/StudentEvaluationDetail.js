import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_studentGroupEvaluations } from 'redux/actions/ecoe/ecoe';

function StudentEvaluationDetail({ get_studentGroupEvaluations, studentGroup, studentGroupEvaluations }) {
  const { studentId } = useParams();

  useEffect(() => {
    if (studentId && studentGroup.id) {
      get_studentGroupEvaluations(studentId, studentGroup.id);
    }
  }, [studentId, studentGroup.id, get_studentGroupEvaluations]);

console.log('studentGroupEvaluations');

  return (
    <div>
      <div className="flex">
        <h2 className="text-2xl font-bold text-primary-blue mb-2">{studentGroup.date}</h2>
        <span className="ms-4 text-center font-bold me-2 py-1 px-2.5 rounded bg-primary-blue text-black">Nota: 7</span>
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
            {studentGroupEvaluations && studentGroupEvaluations.map((studentGroupEvaluation) => (
              <tr key={studentGroupEvaluation.station.id} className="border-b bg-gray-800 border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                  {studentGroupEvaluation.station.name}
                </th>
                <td className="px-6 py-4">{studentGroupEvaluation.evaluation_group.id}</td>
                <td className="px-6 py-4">{studentGroupEvaluation.station_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  studentGroupEvaluations: state.ecoe.studentGroupEvaluations,
});

export default connect(mapStateToProps, {
  get_studentGroupEvaluations,
})(StudentEvaluationDetail);
