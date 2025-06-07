import React from "react";

export default function Navbar({ onNavClick }) {
  return (
    <nav className="z-50 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 border-t border-gray-300 py-2 px-4 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side - Logo */}
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight cursor-default select-none">
          Ranjana.dev
        </h1>

        {/* Right side - Nav links */}
        <ul className="flex gap-10 font-semibold text-indigo-600">
          {[
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
            { label: "Skills", id: "skills" },
            // { label: "Contact", id: "contact" },

            // { label: "Figma Designs", id: "figma" },
            // { label: "Education", id: "education" },
          ].map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => onNavClick(e, id)}
                className="
                  transition
                  transform
                  hover:text-indigo-900
                  hover:scale-110
                  duration-300
                  ease-in-out
                  inline-block
                  cursor-pointer
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
