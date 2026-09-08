import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navigationItems = [
{ label: 'Inicio', path: '/' },
{ label: 'Servicios', path: '/services' },
{ label: 'Testimonios', path: '/testimonials' },
{ label: 'Contacto', path: '/contact' },
];

function NavBar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
setIsMenuOpen((isOpen) => !isOpen);
};

const closeMenu = () => {
setIsMenuOpen(false);
};

const getNavLinkClassName = ({ isActive }) =>
`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-gray-700 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

return ( <nav className="bg-gray-800"> <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> <div className="relative flex h-16 items-center justify-between"> <NavLink
         to="/"
         onClick={closeMenu}
         className="text-xl font-bold text-white"
         aria-label="GymFit - Ir al inicio"
       >
❖ </NavLink>

      <div className="hidden sm:block">
        <ul className="flex items-center gap-2" aria-label="Navegación principal">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={getNavLinkClassName}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:hidden"
        aria-controls="mobile-menu"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            className="h-6 w-6"
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
            className="h-6 w-6"
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
  </div>

  {isMenuOpen && (
    <div id="mobile-menu" className="sm:hidden">
      <ul className="space-y-1 px-2 pb-3 pt-2">
        {navigationItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={closeMenu}
              className={getNavLinkClassName}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )}
</nav>

);
}

export default NavBar;
