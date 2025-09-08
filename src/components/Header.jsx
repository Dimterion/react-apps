import { Link, NavLink } from "react-router";

const Header = () => {
  const active = "text-gray-500";
  const base = "hover:text-gray-500";

  return (
    <header className="flex items-center justify-between border-b border-gray-200 p-2">
      <Link to="/" className="text-xl font-bold">
        React Apps
      </Link>
      <nav className="flex flex-wrap justify-end gap-3 text-sm sm:text-base">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? active : base)}
        >
          Home
        </NavLink>
        <NavLink
          to="/shopping-cart"
          className={({ isActive }) => (isActive ? active : base)}
        >
          Shopping Cart
        </NavLink>
        <NavLink
          to="/notes-app"
          className={({ isActive }) => (isActive ? active : base)}
        >
          Notes App
        </NavLink>
        <NavLink
          to="/rating"
          className={({ isActive }) => (isActive ? active : base)}
        >
          Rating
        </NavLink>
        <NavLink
          to="/timer"
          className={({ isActive }) => (isActive ? active : base)}
        >
          Timer
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
