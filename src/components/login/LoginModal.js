// src/components/LoginModal.js
import React, { useRef, useEffect } from 'react';

const LoginModal = ({ toggleModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleModal]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-dark-bg p-8 rounded-lg shadow-lg relative w-11/12 max-w-md">
        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-light-text hover:text-highlight focus:outline-none"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-primary-blue mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-secondary-text mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 bg-dark-secondary border border-dark-bg rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-secondary-text mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 bg-dark-secondary border border-dark-bg rounded"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={toggleModal}
              className="bg-gray-500 text-light-text py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary-blue text-dark-bg py-2 px-4 rounded hover:bg-highlight transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
