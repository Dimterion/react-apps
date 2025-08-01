import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <main className="mx-auto mt-20 flex w-xl max-w-[90vw] flex-col gap-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl">This page does not exist.</p>
      <Link
        to="/"
        className="mx-auto w-sm max-w-[80vw] border px-4 py-2 hover:bg-gray-100"
      >
        Home page
      </Link>
    </main>
  );
};

export default NotFoundPage;
