import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_students } from "redux/actions/ecoe/ecoe";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import StudentCard from 'components/students/StudentCard';

function Students({ get_students, students }) {

  useEffect(() => {
    window.scrollTo(0, 0);
    get_students();
  }, [get_students]);

  return (
    <Layout>
      <Navbar />
      <div className="bg-dark-bg text-light-text min-h-screen mt-8">
        <div className="container mx-auto py-16 px-4">
          <div className="bg-dark-secondary p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-primary-blue mb-4">
              Students
            </h1>
            <ul className="space-y-4">
              {students && students.map((student, index) => (
                <li key={index} className="block w-full">
                  <StudentCard student={student} />
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-primary-blue text-dark-bg py-2 px-4 rounded hover:bg-highlight transition duration-300">
              Agregar estudiante 
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

const mapStateToProps = state => ({
  students: state.ecoe.students,
});

export default connect(mapStateToProps, {
  get_students,
})(Students);
