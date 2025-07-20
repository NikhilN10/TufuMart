import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

interface HeroProps {
  setShowContactForm: (show: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setShowContactForm }) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const heroBackgrounds = [
    "/heroback2.jpg",
    "/Inventory.jpg",
    "/Research.jpg",
    "/Car.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "500+", label: "Products Sourced" },
    { value: "100+", label: "Happy Clients" },
    { value: "99.9%", label: "On-Time Delivery" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section
      id="home"
      className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background Images */}
      {heroBackgrounds.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Background ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentBgIndex ? "opacity-100" : "opacity-0"
          } object-center sm:object-top`}
          loading="lazy"
          draggable={false}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Simplifying
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                B2B Procurement
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-xl">
              Streamline your industrial supply chain with our tech-enabled
              services.
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => setShowContactForm(true)}
                className="flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (can be used for image/video in future) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
