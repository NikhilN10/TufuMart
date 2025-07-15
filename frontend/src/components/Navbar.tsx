import { Link, useLocation } from "react-router-dom";
import t_logo from "../assets/t_logo.png"; // Adjust the path as necessary
interface NavbarProps {
  scrollY: number;
  setShowContactForm: (show: boolean) => void;
}
const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();

  const navLinkClass = (path: string) =>
    `hover:text-yellow-500 transition font-medium ${
      location.pathname === path ? "text-blue-600" : "text-gray-700"
    }`;

  return (
    <nav
      className="sticky top-0 z-50 px-8 py-2 flex justify-between items-center"
      style={{ backgroundColor: "#0a1d30" }}
    >
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center">
          <img
            src={t_logo}
            alt="TufuMart Logo"
            className="h-12 w-auto" // Adjust height as needed
          />
        </Link>
        <h1 className="text-2xl font-bold text-white">TufuMart</h1>
      </div>

      <div className="space-x-6">
        <Link
          to="/"
          className={`${navLinkClass("/")} text-white hover:text-blue-600`}
        >
          Home
        </Link>
        <Link
          to="/contact"
          className={`${navLinkClass("/")} text-white hover:text-blue-600`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
