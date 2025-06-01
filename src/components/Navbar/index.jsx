import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Links de navegação */}
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-gray-800 text-xl font-semibold hover:text-purple-600 transition-colors duration-300"
        >
          Home
        </Link>

        <Link
          to="/favoritos"
          className="text-gray-800 text-xl font-semibold hover:text-purple-600 transition-colors duration-300"
        >
          Favoritos
        </Link>
      </div>

      {/* Botão hamburguer (opcional) */}
      <div className="md:hidden">
        <button
          className="text-gray-800 focus:outline-none hover:text-purple-600 transition-colors duration-300"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
