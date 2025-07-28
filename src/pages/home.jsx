import { Link } from "react-router";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">React Apps</h1>
      <section className="flex gap-4 text-lg">
        <Link to="/shopping-cart">Shopping Cart</Link>
        <Link to="/notes-app">Notes App</Link>
        <Link to="/rating">Rating</Link>
        <Link to="/timer">Timer</Link>
      </section>
    </main>
  );
};

export default HomePage;
