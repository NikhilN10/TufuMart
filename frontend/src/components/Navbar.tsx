import { Link, useLocation } from "react-router-dom";
import t_logo from "../assets/t_logo.png"; // Adjust path as necessary
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrollY: number;
  setShowContactForm: (show: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (path: string) =>
    `hover:text-yellow-500 transition font-medium ${
      location.pathname === path ? "text-blue-600" : "text-gray-700"
    }`;

  // Close menu on link click (mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50 px-8 py-3 flex justify-between items-center"
        style={{ backgroundColor: "#0a1d30", height: "64px" }}
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

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`${navLinkClass("/")} text-white hover:text-blue-600`}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={`${navLinkClass("/contact")} text-white hover:text-blue-600`}
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Side Drawer - positioned BELOW the navbar */}
      <div
        className={`fixed top-[64px] right-0 h-[calc(100%-64px)] w-64 bg-[#0a1d30] z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-white text-lg hover:text-yellow-500 transition"
          >
            Home
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="text-white text-lg hover:text-yellow-500 transition"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Overlay behind drawer, closes menu when clicked */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
