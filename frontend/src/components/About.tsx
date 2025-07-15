// src/components/About.tsx
import React from "react";

const About: React.FC = () => (
  <section
    id="services"
    className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted tech-enabled B2B procurement partner
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            We are a tech-enabled B2B procurement partner, supporting
            manufacturers and suppliers in optimizing their supply chain — from
            identifying the right products to ensuring on-time delivery. Our
            platform is built to simplify procurement, eliminate inefficiencies,
            and ensure businesses have access to the right goods and services at
            the right time.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We handle the complexities of industrial purchasing, allowing
            companies to focus on their core operations while we take care of
            sourcing, vendor coordination, quality assurance, and logistics. Our
            network and technology streamline the process end-to-end.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By leveraging technology and industry expertise, we bring clarity
            and control to every stage of the procurement process. From
            real-time tracking and digital documentation to analytics and
            reporting, we empower businesses with the transparency and
            decision-making power they need to scale confidently and operate
            with agility.
          </p>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-blue-100 mb-6">
              To enhance efficiency, reduce operational friction, and ensure
              cost-effectiveness at every level of the supply chain through
              smart procurement tools and automation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-100 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-100 text-sm">Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
