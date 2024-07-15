import React, { useState } from 'react';
import axios from 'axios';

function CreateStation({ closeModal, addStation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const newStation = { name, description };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/ecoe/stations/`,
        newStation,
        { headers: { 'Content-Type': 'application/json' } }
      );
      addStation(res.data);
      closeModal();
    } catch (err) {
      setError('Error al crear la estación');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-dark-secondary p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Crear Estación</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-secondary-text mb-2">Nombre</label>
            <input
              type="text"
              className="w-full p-2 bg-light-bg rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-secondary-text mb-2">Descripción</label>
            <textarea
              className="w-full p-2 bg-light-bg rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-red-600 transition duration-300"
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-primary-blue text-dark-bg py-2 px-4 rounded hover:bg-highlight transition duration-300"
              disabled={loading}
            >
              {loading ? 'Creando...' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateStation;
