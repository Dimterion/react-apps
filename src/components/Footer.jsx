const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-1 py-2 text-sm text-gray-700">
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
