import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_estudiantes } from "redux/actions/ecoe/ecoe";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Students({ get_estudiantes, estudiantes }) {

  useEffect(() => {
    window.scrollTo(0, 0);
    get_estudiantes();
  }, [get_estudiantes]);

  console.log(estudiantes&&estudiantes);

  return (
    <Layout>
      <Navbar />
      <div className="bg-dark-bg text-light-text min-h-screen flex items-center justify-center">
        <div className="bg-dark-secondary p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-primary-blue mb-4">
            ---------- Estudiantes ----------
          </h1>
          <ul>
            {estudiantes&&estudiantes.map((estudiante) => (
              <li>{estudiante.nombre}</li>
            ))}
            
          </ul>
          <button className="bg-primary-blue text-dark-bg py-2 px-4 rounded hover:bg-highlight transition duration-300">
            Click 
          </button>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}


const mapStateToProps = state => ({
  estudiantes: state.ecoe.estudiantes,
})

export default connect(mapStateToProps,{
  get_estudiantes,
}) (Students);
