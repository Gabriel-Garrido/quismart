import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_groupEvaluations } from "redux/actions/ecoe/ecoe";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function Plots({ get_groupEvaluations, groupEvaluations }) {
  useEffect(() => {
    const evaluationGroupIds = [1, 2, 3]; // IDs de los grupos de evaluación
    evaluationGroupIds.forEach(id => get_groupEvaluations(id));
  }, [get_groupEvaluations]);

  const groupEvaluationData = {};

  groupEvaluations.forEach(evaluation => {
    const groupId = evaluation.evaluation_group;
    if (!groupEvaluationData[groupId]) {
      groupEvaluationData[groupId] = [];
    }
    groupEvaluationData[groupId].push({
      student: `Estudiante ${evaluation.student}`,
      station: `Estación ${evaluation.station}`,
      score: evaluation.station_score,
    });
  });

  const renderBarChart = (data, groupId) => (
    <ResponsiveContainer width="100%" height={400} key={groupId}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="station" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <Layout>
      <Navbar />
      <div className="bg-dark-bg text-light-text min-h-screen flex flex-col items-center justify-center">
        <div className="bg-dark-secondary p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-primary-blue mb-4">
            Estadísticas
          </h1>
          {Object.keys(groupEvaluationData).map(groupId => (
            <div key={groupId} className="mb-8">
              <h2 className="text-2xl font-bold text-primary-blue mb-4">
                Grupo de Evaluación {groupId}
              </h2>
              {renderBarChart(groupEvaluationData[groupId], groupId)}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

const mapStateToProps = state => ({
  groupEvaluations: state.ecoe.groupEvaluations,
});

export default connect(mapStateToProps, {
  get_groupEvaluations,
})(Plots);
