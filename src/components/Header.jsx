import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">
        React Apps
      </Link>
      <nav className="flex flex-wrap gap-2">
        <Link to="/">Home</Link>
        <Link to="/shopping-cart">Shopping Cart</Link>
        <Link to="/notes-app">Notes App</Link>
        <Link to="/rating">Rating</Link>
        <Link to="/timer">Timer</Link>
      </nav>
    </header>
  );
};

export default Header;
