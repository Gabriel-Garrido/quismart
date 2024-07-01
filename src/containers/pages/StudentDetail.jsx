import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_studentDetail } from "redux/actions/ecoe/ecoe";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useParams } from "react-router-dom";

function StudentDetail({ get_studentDetail, studentDetail }) {
  const { studentId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    get_studentDetail(studentId);
  }, [studentDetail]);
  console.log('studentId: ',studentId );

  console.log('studentDetail: ',studentDetail&&studentDetail);

  if (!studentDetail) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Navbar />
      <div>
        <h1>
          {studentDetail.name} {studentDetail.last_name}
        </h1>
        <p>Email: {studentDetail.email}</p>
        <p>Registration Number: {studentDetail.registration_number}</p>
        {/* Render other student details here */}
      </div>
      <Footer />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  studentDetail: state.ecoe.studentDetail,
});

export default connect(mapStateToProps, {
  get_studentDetail,
})(StudentDetail);
