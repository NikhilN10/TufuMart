import { useState } from "react";
import IndustryCard from "./IndustryCard";
import IndustryModal from "./IndustryModal";
import { industries } from "../Info";
import type { Industry } from "../type/Industry";
import Contact from "../pages/Contact";

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCardClick = (industry: Industry) => {
    setSelectedIndustry(industry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndustry(null);
  };

  // This function will be passed to IndustryModal to open the contact form
  const openContactModal = () => {
    setShowContactForm(true);
    // Optionally close the industry modal when opening contact form
    setIsModalOpen(false);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              image={industry.image}
              onClick={() => handleCardClick(industry)}
            />
          ))}
        </div>
      </div>

      {/* Industry modal */}
      <IndustryModal
        industry={selectedIndustry}
        isOpen={isModalOpen}
        onClose={closeModal}
        openContactModal={openContactModal}
      />

      {/* Contact form modal — create and import your ContactFormModal component */}
      {showContactForm && (
        <Contact
          show={showContactForm}
          onClose={closeContactForm}
        />
      )}
    </div>
  );
}
