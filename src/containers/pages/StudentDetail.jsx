import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { get_studentDetail } from "redux/actions/ecoe/ecoe";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useParams } from "react-router-dom";
import StudentEvaluationDetail from "components/StudentDetail/StudentEvaluationDetail";

function StudentDetail({ get_studentDetail, studentDetail }) {
  const { studentId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    get_studentDetail(studentId);
  }, [studentId, get_studentDetail, studentDetail]);

  if (!studentDetail) {
    return <div>Loading...</div>;
  } else {
    return (
      <Layout>
        <Navbar />
        <div className="bg-dark-bg text-light-text min-h-screen flex justify-center">
          <div className="bg-dark-secondary p-8 rounded-lg shadow-lg w-full mx-3 mt-24 mb-4">
            <div className="items-center justify-between w-full p-5  bg-dark-secondary border border-b-0 border-gray-200 rounded-t-xl focus:ring-gray-200">
              <span className="text-3xl font-bold text-secondary-green mb-2">
                {studentDetail.name} {studentDetail.last_name}
              </span>

              <div className="">
                <p className="mb-2 text-light-text">
                  Registration Number: {studentDetail.registration_number}
                </p>
                <p className="text-secondary-text mb-4">
                  {studentDetail.email}
                </p>
              </div>
            </div>

              <ul>
                {studentDetail.scores.map((score, index) => (
                  <li key={score.evaluation.id} className="mb-2">
                   
                      <div className="p-5 border bg-dark-secondary rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                          <StudentEvaluationDetail
                            key={index}
                            score={score.score}
                            evaluation={score.evaluation}
                          />
                      </div>
                  </li>
                ))}
              </ul>
          </div>
        </div>

        <Footer />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  studentDetail: state.ecoe.studentDetail,
});

export default connect(mapStateToProps, {
  get_studentDetail,
})(StudentDetail);
