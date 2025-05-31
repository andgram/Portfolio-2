import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide hover:text-indigo-300 transition-colors duration-300"
      >
        andgram
      </Link>
    </nav>
  );
};

export default Navbar;
