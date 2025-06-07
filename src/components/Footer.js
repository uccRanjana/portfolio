import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
  <footer className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 border-t border-gray-300 py-8 px-4 text-gray-700 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-light">
          © 2025 <span className="font-semibold">Ranjana</span>. Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          using React & Tailwind CSS.
        </p>

        <div className="flex space-x-6 text-gray-600">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-600 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-indigo-600 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
