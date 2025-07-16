import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";



interface HeroProps {
  setShowContactForm: (show: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setShowContactForm }) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Update these paths to match your local images
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
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackgrounds[currentBgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Simplifying
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                B2B Procurement
              </span>
            </h1>
            <p className="text-xl text-gray-200">
              Streamline your industrial supply chain with our tech-enabled
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowContactForm(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Quote
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
