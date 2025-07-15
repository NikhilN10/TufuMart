

import React, { useState } from "react";
import { X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

interface ContactFormModalProps {
  show: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactFormModalProps> = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_q3qx54m", // ✅ Replace with your EmailJS Service ID
        "template_gdqm7tx", // ✅ Replace with your EmailJS Template ID
        formData,
        "9r6H23ea-n0wSK5eK" // ✅ Replace with your EmailJS Public Key
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#10b981",
            color: "#fff",
          },
        });
        setFormData({ name: "", email: "", company: "", message: "" });
        // Delay closing the modal to show the success toast
        setTimeout(() => {
          onClose();
        }, 1500);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        toast.error("Failed to send message. Please try again!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#ef4444",
            color: "#fff",
          },
        });
      })
      .finally(() => setLoading(false));
  };

  // ✅ Add this function to handle backdrop clicks
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!show) return null;

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick} // ✅ Allow closing by clicking backdrop
      >
        <div className="bg-white rounded-lg w-full max-w-md shadow-lg p-6 relative">
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 z-10"
            onClick={onClose}
            type="button" // ✅ Explicitly set button type
          >
            <X className="w-6 h-6" />
          </button>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Get a Quote</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />

            <input
              name="company"
              type="text"
              placeholder="Organization Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.company}
              onChange={handleChange}
              disabled={loading}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
