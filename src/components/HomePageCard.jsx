import { Link } from "react-router";

const HomePageCard = ({ link, title }) => {
  return (
    <Link
      to={link}
      className="flex h-30 w-30 items-center justify-center rounded border p-4 text-center shadow-md hover:shadow-lg"
    >
      {title}
    </Link>
  );
};

export default HomePageCard;
