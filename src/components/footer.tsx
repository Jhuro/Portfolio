export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-secondary p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <p>&copy; {currentYear}</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/juanpatiñob"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Jhuro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}