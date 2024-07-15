import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { get_stations } from "redux/actions/ecoe/ecoe";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import StationCard from 'components/stations/StationCard';
import CreateStation from 'components/stations/CreateStation';

function Stations({ get_stations, stations }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    get_stations();
  }, [get_stations]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const addStation = (newStation) => {
    stations.push(newStation);
  };

  return (
    <Layout>
      <Navbar />
      <div className="bg-dark-bg text-light-text min-h-screen mt-8">
        <div className="container mx-auto py-16 px-4">
          <div className="bg-dark-secondary p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-primary-blue mb-4">
              Stations
            </h1>
            <ul className="space-y-4">
              {stations && stations.map((station, index) => (
                <li key={index} className="block w-full">
                  <StationCard station={station} />
                </li>
              ))}
            </ul>
            <button
              onClick={openModal}
              className="mt-8 bg-primary-blue text-dark-bg py-2 px-4 rounded hover:bg-highlight transition duration-300"
            >
              Crear Estación
            </button>
          </div>
        </div>
      </div>
      {modalOpen && <CreateStation closeModal={closeModal} addStation={addStation} />}
      <Footer />
    </Layout>
  );
}

const mapStateToProps = state => ({
  stations: state.ecoe.stations,
});

export default connect(mapStateToProps, {
  get_stations,
})(Stations);
