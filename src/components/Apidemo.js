import React, { useState, useEffect, useRef } from "react";

const apiFlowDuration = 4000;
const animationDuration = 500; // ms for smooth hide animation

export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center px-4 pt-12 pb-24 bg-gray-100">
        <h1 className="text-4xl font-bold mb-12 text-indigo-700 text-center max-w-4xl">
          Your Main Page Content Here
        </h1>
        <p className="max-w-xl text-center text-gray-700 mb-20">
          Scroll down to see the API flow section above the footer.
        </p>

        {[...Array(10)].map((_, i) => (
          <p key={i} className="max-w-4xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            malesuada, nisl at blandit congue, enim massa congue metus, eu
            lacinia nulla justo a velit.
          </p>
        ))}

        <ApiFlowSection />

        {/* <Footer /> */}
      </div>
    </>
  );
}

function ApiFlowSection() {
  const [step, setStep] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [closing, setClosing] = useState(false); // new: triggers smooth hide animation

  const sectionRef = useRef(null);

  const contactInfo = {
    name: "Ranjana",
    email: "ranjana.dev@example.com",
    phone: "+91 98765 43210",
    github: "github.com/ranjana",
  };

  // API running logic
  useEffect(() => {
    let timer;
    if (step === 1) {
      timer = setTimeout(() => {
        setShowResponse(true);
        setStep(2);
      }, apiFlowDuration);
    }
    if (step === 0) {
      setShowResponse(false);
      setShowContactForm(false);
      setSubmitted(false);
      setClosing(false);
    }
    return () => clearTimeout(timer);
  }, [step]);

  // Scroll reset debounce with smooth closing
  useEffect(() => {
    let debounceTimer = null;

    function onScroll() {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;

      if (top > 100 && step !== 0 && !closing) {
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          // start smooth closing animation
          setClosing(true);
          // after animationDuration reset everything
          setTimeout(() => {
            setStep(0);
            setShowContactForm(false);
            setSubmitted(false);
            setShowResponse(false);
            setClosing(false);
          }, animationDuration);
        }, 1000);
      } else {
        if (debounceTimer) {
          clearTimeout(debounceTimer);
          debounceTimer = null;
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [step, closing]);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Close button handler with smooth close animation
  const closeForm = () => {
    setClosing(true);
    setTimeout(() => {
      setShowContactForm(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      setClosing(false);
    }, animationDuration);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto mt-24 p-6 bg-white border border-gray-300 rounded-2xl shadow-md"
      aria-label="API flow and contact section"
    >
      {/* Flow bar */}
      <div className="flex items-center justify-center space-x-10">
        <ApiIcon label="Client" emoji="🖥️" />
        <AnimatedArrow active={step === 1} delay={0} />

        <ApiIcon label="Server" emoji="🗄️" />
        <AnimatedArrow active={step === 1} delay={1500} />

        <ApiIcon label="Database" emoji="💾" />

        <div className="flex-grow" />

        {step === 0 && (
          <button
            onClick={() => setStep(1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1.5 px-4 rounded-full shadow transition text-sm"
          >
            Run API
          </button>
        )}

        {step === 2 && !showContactForm && (
          <button
            onClick={() => setShowContactForm(true)}
            className="ml-4 bg-indigo-200 hover:bg-indigo-300 text-indigo-800 font-semibold py-2 px-6 rounded-full shadow transition animate-pulse"
            aria-label="Contact Me"
          >
            Contact Me
          </button>
        )}
      </div>

      {/* Animate container for response and contact form */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out mt-8 ${
          closing
            ? "max-h-0 opacity-0"
            : showContactForm
            ? "max-h-[600px] opacity-100"
            : showResponse
            ? "max-h-[360px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        style={{ willChange: "max-height, opacity" }}
      >
        {/* Success + Response */}
        {showResponse && !showContactForm && (
          <>
            <div className="mb-2 p-3 bg-green-100 text-green-700 rounded font-semibold inline-block">
              Success: true
            </div>

            <div className="mb-6 select-text opacity-100 transition-opacity duration-700">
              <h4 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center space-x-2">
                <CheckmarkIcon />
                <span>API Response:</span>
              </h4>
              <pre className="bg-indigo-100 p-5 rounded text-indigo-900 font-mono whitespace-pre-wrap max-h-36 overflow-auto">
                {JSON.stringify(contactInfo, null, 2)}
              </pre>
            </div>
          </>
        )}

        {/* Contact form */}
        {showContactForm && (
          <div className="mt-6 border-t border-indigo-300 pt-6">
            {!submitted ? (
              <form onSubmit={onSubmit}>
                <h4 className="text-lg font-semibold mb-6 text-indigo-800">
                  Send me a message
                </h4>
                <label className="block mb-4 font-medium text-gray-700">
                  Your Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    required
                    className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </label>
                <label className="block mb-4 font-medium text-gray-700">
                  Your Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    required
                    className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </label>
                <label className="block mb-6 font-medium text-gray-700">
                  Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    required
                    rows={4}
                    className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </label>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow transition"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={closeForm}
                    className="text-indigo-700 underline hover:text-indigo-900"
                  >
                    Close
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6 bg-green-100 text-green-800 rounded-xl border border-green-300 shadow-inner">
                Thank you for your message! I'll get back to you soon.
                <button
                  onClick={closeForm}
                  className="block mt-4 text-indigo-700 underline hover:text-indigo-900"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function ApiIcon({ label, emoji }) {
  return (
    <div className="flex flex-col items-center space-y-1 select-none w-20">
      <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-4xl leading-none">
        {emoji}
      </div>
      <span className="text-indigo-700 font-semibold text-sm">{label}</span>
    </div>
  );
}

function AnimatedArrow({ active, delay }) {
  return (
    <div
      className="relative w-20 h-6 overflow-visible"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`absolute w-3 h-3 bg-indigo-300 rounded-full ${
          active ? "animate-moveArrow" : "opacity-0"
        }`}
        style={{ animationDelay: `${delay}ms` }}
      />
      <style>{`
        @keyframes moveArrow {
          0% { left: 0; opacity: 1; }
          50% { left: calc(100% - 12px); opacity: 1; }
          100% { left: 0; opacity: 0; }
        }
        .animate-moveArrow {
          animation: moveArrow 4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}

function CheckmarkIcon() {
  return (
    <svg
      className="w-6 h-6 text-green-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// function Footer() {
//   return (
//     <footer className="w-full h-16 bg-indigo-700 text-white flex items-center justify-center shadow-lg mt-24 rounded-t-xl">
//       © 2025 Ranjana&apos;s Footer
//     </footer>
//   );
// }
