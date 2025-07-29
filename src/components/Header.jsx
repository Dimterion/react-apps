import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 p-2">
      <Link to="/" className="text-xl font-bold">
        React Apps
      </Link>
      <nav className="flex flex-wrap gap-2">
        <Link to="/" className="hover:text-gray-500">
          Home
        </Link>
        <Link to="/shopping-cart" className="hover:text-gray-500">
          Shopping Cart
        </Link>
        <Link to="/notes-app" className="hover:text-gray-500">
          Notes App
        </Link>
        <Link to="/rating" className="hover:text-gray-500">
          Rating
        </Link>
        <Link to="/timer" className="hover:text-gray-500">
          Timer
        </Link>
      </nav>
    </header>
  );
};

export default Header;
