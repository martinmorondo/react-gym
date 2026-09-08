import { Link } from 'react-router-dom';

function NotFound() {
return ( <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gray-900 px-4 text-center"> <div> <p className="mb-2 text-6xl font-bold text-red-500">404</p>
    <h1 className="mb-4 text-3xl font-bold text-white">
      Página no encontrada
    </h1>

    <p className="mb-8 max-w-md text-gray-400">
      La página que estás buscando no existe o fue movida.
    </p>

    <Link
      to="/"
      className="inline-flex rounded-md bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
    >
      Volver al inicio
    </Link>
  </div>
</main>
);
}

export default NotFound;
