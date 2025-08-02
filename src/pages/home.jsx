import HomePageCard from "../components/HomePageCard";

const HomePage = () => {
  return (
    <main>
      <h1 className="mt-4 text-center text-2xl font-bold sm:mt-0">
        React Apps
      </h1>
      <section className="mt-18 flex flex-wrap justify-center gap-x-10 gap-y-10 text-lg">
        <HomePageCard link="/shopping-cart" title="Shopping Cart" />
        <HomePageCard link="/notes-app" title="Notes App" />
        <HomePageCard link="/rating" title="Rating" />
        <HomePageCard link="/timer" title="Timer" />
      </section>
    </main>
  );
};

export default HomePage;
