import { Link } from "react-router";

const HomePage = () => {
  return (
    <>
      <h1>React Apps</h1>
      <Link to="/shopping-cart">Shopping Cart</Link>
      <Link to="/notes-app">Notes App</Link>
      <Link to="/rating">Rating</Link>
    </>
  );
};

export default HomePage;
