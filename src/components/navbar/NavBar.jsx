import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <NavLink className="text-white" to="/">❖</NavLink>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <ul className=" flex justify-center items-center space-x-4 ml-[350px]">
                <NavLink className="text-white hover:text-gray-300" to="/">Home</NavLink>            
                <NavLink className="text-white hover:text-gray-300"  to="/services">Services</NavLink>
                <NavLink className="text-white hover:text-gray-300" to="/testimonials">Testimonios</NavLink>
                <NavLink className="text-white hover:text-gray-300" to="/contact">Contacto</NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className="text-white block hover:text-gray-300"
            >
              Home
            </NavLink>
           
              <NavLink
              to="/services"
              className="text-white block hover:text-gray-300"
            >
              Servicios
            </NavLink>
            <NavLink
              to="/testimonials"
              className="text-white block hover:text-gray-300"
            >
              Testimonios
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white block hover:text-gray-300"
            >
              Contacto
            </NavLink>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
