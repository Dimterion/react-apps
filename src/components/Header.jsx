import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1>React Apps</h1>
      <nav className="flex gap-2">
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
