import React, { useState } from "react";
import { motion } from "framer-motion";
import contactmeLogo from "../assets/contactme.jpg";

export default function ContactFormBox() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const scriptURL = "https://script.google.com/macros/s/AKfycbxEbMtu41Nr2MuFzw11ohi26UdkntfKYMC05M5xMGoKn6FBuXYn1ttqTrt-rHwJQ-naJQ/exec"; // ✅ Replace with your script if needed

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send. Try again later.");
    }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center mt-12"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={contactmeLogo}
          alt="Contact Me"
          className="w-full max-w-sm object-contain rounded-xl"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-2">Contact Me</h2>
        <p className="text-sm text-gray-600 mb-6">I'd love to hear from you. Drop a message!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm text-center mt-2 text-gray-700">{status}</p>
          )}
        </form>
      </div>
    </motion.div>
  );
}
