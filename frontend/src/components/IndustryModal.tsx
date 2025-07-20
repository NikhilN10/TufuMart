
import { Shield, Wrench, X, Zap, Users } from "lucide-react";
import type { ReactNode, Key } from "react";
import React from "react";

// Updated Industry type with gradient and icon
type Industry = {
  icon: any;
  title: string;
  description: string;
  image: string;
  gradient: string;
  products: ReactNode[];
};

interface IndustryModalProps {
  industry: Industry | null;
  isOpen: boolean;
  onClose: () => void;
  openContactModal: () => void; // <-- new prop
}

function IndustryModal({ industry, isOpen, onClose,openContactModal }: IndustryModalProps) {
  if (!isOpen || !industry) return null;

  // Sample industry data for demo
  const sampleIndustry = industry || {
    icon: Users,
    title: "Consumer",
    description: "Consumer goods and retail solutions",
    image: "",
    gradient: "bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700",
    products: [
      "Electronics",
      "Home Appliances", 
      "Furniture",
      "Kitchenware",
      "Personal Care Products",
      "Sports Equipment",
      "Toys & Games",
      "Fashion Accessories",
      "Home Decor",
      "Health & Wellness Products"
    ]
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-xl w-full max-w-4xl h-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-slideUp flex flex-col">
        
        {/* Header - Fixed height with proper responsive sizing */}
        <div className={`flex-shrink-0 text-white relative overflow-hidden ${sampleIndustry.gradient}`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-white rounded-full animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-white rounded-full animate-bounce-slow" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white rounded-full opacity-30 animate-spin-slow" />
            <div className="absolute top-4 right-1/4 w-3 h-3 bg-white rounded-full animate-ping" />
            <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-white/70 rounded-full animate-pulse" />
          </div>

          <div className="relative p-4 sm:p-6 flex justify-between items-start min-h-[140px] sm:min-h-[160px]">
            <div className="flex items-start space-x-3 sm:space-x-4 flex-1 pr-4">
              <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-lg rounded-lg border border-white/30 shadow-xl animate-float flex-shrink-0">
                <div className="text-xl sm:text-2xl"> 
                  {React.createElement(sampleIndustry.icon, { size: 24, className: "text-white sm:w-7 sm:h-7" })}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 animate-slideInLeft break-words">{sampleIndustry.title}</h2>
                <p className="text-white/95 text-sm sm:text-base leading-relaxed animate-slideInLeft animation-delay-200 break-words">
                  {sampleIndustry.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3 animate-slideInLeft animation-delay-400">
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/30 flex items-center">
                    <Zap size={10} className="mr-1 flex-shrink-0" />
                    <span>Fast Delivery</span>
                  </span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/30 flex items-center">
                    <Shield size={10} className="mr-1 flex-shrink-0" />
                    <span>Quality Assured</span>
                  </span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/30 flex items-center">
                    <Wrench size={10} className="mr-1 flex-shrink-0" />
                    <span>Custom Solutions</span>
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-lg border border-white/20 hover:scale-110 hover:rotate-90 group flex-shrink-0"
              aria-label="Close modal"
            >
              <X size={20} className="text-white group-hover:text-red-200 transition-colors" />
            </button>
          </div>
        </div>

        {/* Products - Flexible scrollable area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
          <div className="p-4 sm:p-6">
            <div className="flex items-center mb-4 sm:mb-6 animate-slideInUp">
              <div className={`w-4 h-4 rounded-full mr-3 ${sampleIndustry.gradient} shadow-lg animate-pulse flex-shrink-0`} />
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent break-words">
                Products We Supply for {sampleIndustry.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {sampleIndustry.products.map((product, index: Key) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-white to-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:rotate-1 animate-fadeInUp cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${typeof index === 'number' ? index * 100 : 0}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  
                  <div className="relative flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${sampleIndustry.gradient} shadow-lg group-hover:scale-125 group-hover:shadow-purple-300 transition-all duration-300 flex-shrink-0`} />
                    <span className="text-gray-800 font-medium text-sm sm:text-base leading-relaxed group-hover:text-purple-700 transition-colors duration-300 break-words">
                      {product}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA - Fixed bottom section */}
        <div className="flex-shrink-0 border-t border-gray-200 bg-gradient-to-r from-gray-50 via-white to-gray-50">
          <div className="p-4 sm:p-6">
            <div className={`${industry.gradient} rounded-xl p-4 sm:p-6 text-white text-center relative overflow-hidden shadow-2xl`}>
              <div className="absolute inset-0 opacity-15">
                {/* animations */}
              </div>

              <div className="relative">
                <div className="mb-3 animate-bounce text-2xl sm:text-3xl flex justify-center">
                  {React.createElement(industry.icon, { size: 28, className: "text-white" })}
                </div>
                <h4 className="text-base sm:text-lg font-bold mb-4 animate-slideInUp break-words">
                  Need Custom Solutions for {industry.title}?
                </h4>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-slideInUp animation-delay-400">
                  <button
                    onClick={() => {
                      openContactModal();  // open contact form
                      onClose();          // close this modal
                    }}
                    className="w-full sm:w-auto bg-white text-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-2 group text-sm sm:text-base"
                  >
                    <span>Get Instant Quote</span>
                    <Zap size={14} className="group-hover:text-yellow-500 transition-colors flex-shrink-0" />
                  </button>

                  <button className="w-full sm:w-auto border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300 font-bold backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-slideUp { animation: slideUp 0.6s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out; }
        .animate-slideInUp { animation: slideInUp 0.6s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #764ba2 0%, #667eea 100%);
        }
      `}</style>
    </div>
  );
}

export default IndustryModal;