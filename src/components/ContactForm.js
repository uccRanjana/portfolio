import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxEbMtu41Nr2MuFzw11ohi26UdkntfKYMC05M5xMGoKn6FBuXYn1ttqTrt-rHwJQ-naJQ/exec";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: form
      });

      if (res.ok) {
        setStatus("✅ Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Send
        </button>
        {status && <p className="text-center mt-2 text-gray-600">{status}</p>}
      </form>
    </div>
  );
}
