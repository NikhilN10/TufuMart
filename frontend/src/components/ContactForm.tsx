// ContactForm.tsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current!,
        "your_public_key"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            duration: 4000,
            position: "top-right",
          });
          form.current?.reset();
        },
        (error) => {
          toast.error("Failed to send message, please try again!", {
            duration: 4000,
            position: "top-right",
          });
          console.error(error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Toaster />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-4 max-w-xl mx-auto"
      >
        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          disabled={isSubmitting}
          className="w-full p-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          disabled={isSubmitting}
          className="w-full p-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          disabled={isSubmitting}
          className="w-full p-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          disabled={isSubmitting}
          className="w-full p-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
