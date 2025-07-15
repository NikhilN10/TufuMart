// src/components/Navbar.tsx
import React from "react";
import { Building, Menu, X } from "lucide-react";

interface NavbarProps {
  scrollY: number;
  setShowContactForm: (show: boolean) => void;
}

const NewNbar: React.FC<NavbarProps> = ({ scrollY, setShowContactForm }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TuffuMart
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "services", "about"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-blue-600 transition-colors capitalize"
              >
                {section}
              </button>
            ))}
            <button
              onClick={() => setShowContactForm(true)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-4 py-4 space-y-4">
            {["home", "services", "about"].map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 capitalize"
              >
                {section}
              </button>
            ))}
            <button
              onClick={() => {
                setShowContactForm(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </button>
            <button
              onClick={() => {
                scrollToSection("cta");
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NewNbar;
