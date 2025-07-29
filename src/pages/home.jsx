import { Link } from "react-router";
import HomePageCard from "../components/HomePageCard";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">React Apps</h1>
      <section className="mt-4 flex flex-wrap justify-center gap-4 text-lg">
        <HomePageCard link="/shopping-cart" title="Shopping Cart" />
        <HomePageCard link="/notes-app" title="Notes App" />
        <HomePageCard link="/rating" title="Rating" />
        <HomePageCard link="/timer" title="Timer" />
      </section>
    </main>
  );
};

export default HomePage;
