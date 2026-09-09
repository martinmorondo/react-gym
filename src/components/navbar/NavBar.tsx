import { useEffect, useState } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

import { brand } from '../../constants/brand';

const navigationItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Ejercicios', path: '/exercises' },
  { label: 'Servicios', path: '/services' },
  { label: 'Testimonios', path: '/testimonials' },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavLinkClassName: NonNullable<NavLinkProps['className']> = ({
    isActive,
  }) =>
    `relative block px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-white'
        : 'text-gray-400 hover:text-white'
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-black/90 shadow-lg backdrop-blur-xl'
          : 'border-white/5 bg-black/70 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label={`${brand.name} - Ir al inicio`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-sm font-black text-white shadow-lg shadow-red-600/20 transition-transform duration-300 group-hover:scale-105">
              F
            </span>

            <span className="text-xl font-black tracking-tight text-white">
              {brand.shortName}
            </span>
          </NavLink>

          <div className="hidden items-center gap-8 md:flex">
            <ul
              className="flex items-center gap-1"
              aria-label="Navegación principal"
            >
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={getNavLinkClassName}
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}

                        <span
                          className={`absolute bottom-0 left-3 right-3 h-0.5 origin-left rounded-full bg-red-500 transition-transform duration-300 ${
                            isActive
                              ? 'scale-x-100'
                              : 'scale-x-0'
                          }`}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-red-600/30 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Comenzar
            </NavLink>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2.5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen
                ? 'Cerrar menú principal'
                : 'Abrir menú principal'
            }
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
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-black/95 md:hidden"
        >
          <ul className="space-y-1 px-4 py-4">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="pt-2">
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="block rounded-lg bg-red-600 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-red-500"
              >
                Comenzar
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
