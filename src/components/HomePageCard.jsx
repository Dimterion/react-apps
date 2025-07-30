import { Link } from "react-router";

const HomePageCard = ({ link, title }) => {
  return (
    <Link
      to={link}
      className="relative h-[80px] w-40 bg-gray-500 hover:opacity-90"
    >
      <div className="absolute bottom-full border-r-[80px] border-b-[40px] border-l-[80px] border-transparent border-b-gray-500"></div>
      <p className="flex h-[80px] items-center justify-center text-gray-100">
        {title}
      </p>
      <div className="absolute top-full border-t-[40px] border-r-[80px] border-l-[80px] border-transparent border-t-gray-500"></div>
    </Link>
  );
};

export default HomePageCard;
