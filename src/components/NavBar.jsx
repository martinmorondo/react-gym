import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-800">
            <ul className="flex justify-center">
                <li className="mr-6 to-blue-700">
                    <Link className="text-white hover:text-gray-300" to="/">Home</Link>
                </li>
                <li className="mr-6 to-blue-700">
                    <Link className="text-white hover:text-gray-300" to="/about">Nosotros</Link>
                </li>
                <li className="mr-6 to-blue-700">
                    <Link className="text-white hover:text-gray-300" to="/services">Servicios</Link>
                </li>
                <li className="mr-6 to-blue-700">
                    <Link className="text-white hover:text-gray-300" to="/testimonials">Testimonios</Link>
                </li>
                <li className="mr-6 to-blue-700">
                    <Link className="text-white hover:text-gray-300" to="/contact">Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;