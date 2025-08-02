const Footer = () => {
  return (
    <footer className="mt-6 flex justify-center gap-1 p-1 text-sm text-gray-700">
      <p>&copy; {new Date().getFullYear()}</p>
      <a
        href="https://www.dimterion.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Dimterion
      </a>
    </footer>
  );
};

export default Footer;
