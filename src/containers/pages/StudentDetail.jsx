import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_studentDetail, get_studentGroups } from "redux/actions/ecoe/ecoe";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { Link, useParams } from "react-router-dom";
import StudentEvaluationDetail from "components/StudentDetail/StudentEvaluationDetail";
import { ArrowLeftIcon } from '@heroicons/react/outline';

function StudentDetail({ get_studentDetail, studentDetail, get_studentGroups, studentGroups }) {
  const { studentId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (studentId) {
      get_studentDetail(studentId);
      get_studentGroups(studentId);
    }
  }, [studentId, get_studentDetail, get_studentGroups]);

  if (!studentDetail) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Navbar />
      <div className="bg-dark-bg text-light-text min-h-screen flex justify-center">
        <div className="bg-dark-secondary p-8 rounded-lg shadow-lg w-full mx-3 mt-24 mb-4">
        
          <div className="items-center flex justify-start w-full p-5 bg-dark-secondary border border-b-0 border-gray-200 rounded-t-xl focus:ring-gray-200">
          <Link to='/students' className="mr-4">
          <ArrowLeftIcon className="h-8 w-8 text-secondary-green hover:text-blue-700" />
        </Link>
        <div>

            <span className="text-3xl font-bold text-secondary-green mb-2">
              {studentDetail.name} {studentDetail.last_name}
            </span>
            <div>
              <p className="mb-1 text-light-text">
                Número de matrícula: {studentDetail.registration_number}
              </p>
              <p className="text-secondary-text mb-2">
                {studentDetail.email}
              </p>
            </div>
          </div>

        </div>
          <ul>
            {studentGroups.map((studentGroup) => (
              <li key={studentGroup.id} className="mb-2">
                <div className="p-5 border bg-dark-secondary rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                  <StudentEvaluationDetail studentGroup={studentGroup} />
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

const mapStateToProps = (state) => ({
  studentDetail: state.ecoe.studentDetail,
  studentGroups: state.ecoe.studentGroups,
});

export default connect(mapStateToProps, {
  get_studentDetail,
  get_studentGroups,
})(StudentDetail);
