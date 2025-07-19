import { Shield, Wrench, X, Zap, type LucideIcon } from "lucide-react";
import type { ReactNode, Key } from "react";
import React from "react";

// Updated Industry type with gradient and icon
type Industry = {
  icon: LucideIcon;
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
}

function IndustryModal({ industry, isOpen, onClose }: IndustryModalProps) {
  if (!isOpen || !industry) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-slideUp">
        
        {/* Header */}
        <div className={`sticky top-0 text-white relative overflow-hidden ${industry.gradient}`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -right-20 w-80 h-80 border-2 border-white rounded-full animate-pulse" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 border-2 border-white rounded-full animate-bounce-slow" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full opacity-30 animate-spin-slow" />
            <div className="absolute top-10 right-1/4 w-4 h-4 bg-white rounded-full animate-ping" />
            <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>

          <div className="relative p-10 flex justify-between items-start">
            <div className="flex items-start space-x-8">
              <div className="p-6 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-xl animate-float">
                <div className="text-5xl"> {React.createElement(industry.icon, { size: 48, className: "text-white" })}</div>
              </div>

              <div className="flex-1">
                <h2 className="text-5xl font-bold mb-4 animate-slideInLeft">{industry.title}</h2>
                <p className="text-white/95 text-xl leading-relaxed max-w-3xl animate-slideInLeft animation-delay-200">
                  {industry.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6 animate-slideInLeft animation-delay-400">
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/30">
                    <Zap size={16} className="inline mr-2" />
                    Fast Delivery
                  </span>
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/30">
                    <Shield size={16} className="inline mr-2" />
                    Quality Assured
                  </span>
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/30">
                    <Wrench size={16} className="inline mr-2" />
                    Custom Solutions
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-4 hover:bg-white/20 rounded-2xl transition-all duration-300 backdrop-blur-lg border border-white/20 hover:scale-110 hover:rotate-90 group"
              aria-label="Close modal"
            >
              <X size={32} className="text-white group-hover:text-red-200 transition-colors" />
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="overflow-y-auto max-h-[55vh] custom-scrollbar">
          <div className="p-10">
            <div className="flex items-center mb-10 animate-slideInUp">
              <div className={`w-8 h-8 rounded-full mr-6 ${industry.gradient} shadow-lg animate-pulse`} />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Products We Supply for {industry.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industry.products.map((product, index: Key) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 animate-fadeInUp cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${typeof index === 'number' ? index * 100 : 0}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${industry.gradient} shadow-lg group-hover:scale-125 group-hover:shadow-purple-300 transition-all duration-300 `} />
                    <span className="text-gray-800 font-bold text-base leading-relaxed group-hover:text-purple-700 transition-colors duration-300 flex-1">
                      {product}
                    </span>
                  </div>

                {/* <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" /> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-gray-200 bg-gradient-to-r from-gray-50 via-white to-gray-50">
          <div className="p-10">
            <div className={`${industry.gradient} rounded-3xl p-10 text-white text-center relative overflow-hidden shadow-2xl`}>
              <div className="absolute inset-0 opacity-15">
                <div className="absolute top-0 right-0 w-40 h-40 border-2 border-white rounded-full animate-spin-slow" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border border-white rounded-full animate-bounce-slow" />
                <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white rounded-full animate-ping" />
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/70 rounded-full animate-pulse" />
              </div>

              <div className="relative">
                <div className="mb-6 animate-bounce text-6xl">
                   {React.createElement(industry.icon, { size: 48, className: "text-white" })}
                </div>
                <h4 className="text-3xl font-bold mb-4 animate-slideInUp">
                  Need Custom Solutions for {industry.title}?
                </h4>
                <p className="text-white/95 mb-8 text-xl max-w-3xl mx-auto leading-relaxed animate-slideInUp animation-delay-200">
                  Get specialized products, bulk procurement, and expert consultation for your {industry.title.toLowerCase()} needs
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideInUp animation-delay-400">
                  <button className="bg-white text-gray-800 px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center space-x-3 group">
                    <span className="text-lg">Get Instant Quote</span>
                    <Zap size={20} className="group-hover:text-yellow-500 transition-colors" />
                  </button>
                  <button className="border-3 border-white text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-gray-800 transition-all duration-300 font-bold backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Schedule Consultation
                  </button>
                </div>

                <div className="mt-8 flex justify-center items-center space-x-10 text-base text-white/90 animate-slideInUp animation-delay-600">
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>24/7 Support</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span>Bulk Discounts</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    <span>Fast Delivery</span>
                  </span>
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
          width: 8px;
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
        
        .border-3 { border-width: 3px; }
      `}</style>
    </div>
  );
}

export default IndustryModal;
