// src/components/Navbar.js
import React, { useState } from "react";
import LoginModal from "../login/LoginModal";
import logo from "../../assets/img/Logo_Quismart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dark-secondary fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to='/' className="flex items-center space-x-3">
          <img src={logo} className="h-8 md:h-12" alt="Logo Quismart" />
          <span className="hidden md:inline self-center text-2xl font-semibold text-light-text">
            Quismart
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            onClick={toggleModal}
            className="text-dark-bg bg-primary-blue hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300"
          >
            Log in
          </button>
          
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-dark-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-dark-secondary">
            <li>
              <Link to='/'
                className="block py-2 px-3 text-light-text rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-primary-blue md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to='/plots'
                className="block py-2 px-3 text-light-text rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-primary-blue md:p-0"
              >
                Estadísticas
              </Link>
            </li>
            <li>
              <Link to='/questions'
                className="block py-2 px-3 text-light-text rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-primary-blue md:p-0"
              >
                Preguntas
              </Link>
            </li>
            <li>
              <Link to='/stations'
                className="block py-2 px-3 text-light-text rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-primary-blue md:p-0"
              >
                Estaciones
              </Link>
            </li>
            <li>
              <Link to='/students'
                className="block py-2 px-3 text-light-text rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-primary-blue md:p-0"
              >
                Estudiantes
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isModalOpen && <LoginModal toggleModal={toggleModal} />}
    </nav>
  );
};

export default Navbar;
