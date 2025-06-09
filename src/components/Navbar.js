import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const onNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu on click (mobile)
  };

  return (
    <nav className="z-50 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 border-t border-gray-300 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight cursor-default select-none">
          Ranjana.dev
        </h1>

        {/* Hamburger menu button (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav links (desktop) */}
        <ul className="hidden md:flex gap-10 font-semibold text-indigo-600">
          {[
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
            { label: "Skills", id: "skills" },
          ].map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => onNavClick(e, id)}
                className="transition transform hover:text-indigo-900 hover:scale-110 duration-300 ease-in-out cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile nav links */}
     {isOpen && (
  <ul className="md:hidden px-6 pb-4 flex flex-row justify-center gap-6 font-semibold text-indigo-600">
    {[
      { label: "About", id: "about" },
      { label: "Projects", id: "projects" },
      { label: "Skills", id: "skills" },
    ].map(({ label, id }) => (
      <li key={id}>
        <a
          href={`#${id}`}
          onClick={(e) => onNavClick(e, id)}
          className="block py-2 transition hover:text-indigo-900"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
)}

    </nav>
  );
}
