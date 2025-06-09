// ContactSection.js
import React, { useState } from "react";
import ContactModel from "./ContactModel";
import callLogo from "../assets/call-icon.png";

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Call button with image, halo animation */}
     <button
  onClick={() => setShowModal(true)}
  className="
    fixed right-5 bottom-6 z-50 
    w-14 h-14 md:w-20 md:h-20 
    rounded-full bg-indigo-500 text-white shadow-lg
    flex items-center justify-center
    animate-pulse hover:bg-indigo-600
    ring-4 ring-indigo-400 ring-opacity-50
    transition duration-300
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-indigo-300
  "
  aria-label="Open Contact Modal"
>
  <img
    src={callLogo}
    alt="Call Icon"
    className="w-8 h-8 md:w-12 md:h-12"
    style={{
      filter:
        "brightness(0) saturate(100%) sepia(70%) hue-rotate(270deg) brightness(1.5) contrast(1)",
    }}
  />
</button>


      <ContactModel show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}


