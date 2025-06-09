import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { apexcolors } from "../themes/apexcolors";

const pastelColors = [
  "#A6DCEF",
  "#F9D5E5",
  "#FFF5BA",
  "#C1E1C1",
  "#FFD6A5",
  "#E2C2FF",
  "#B5EAEA",
];

const projects = [
  {
    title: "School Management Platform (Confidential)",
    desc: `Built a scalable microservices-based school ERP using NestJS and PostgreSQL.
- Developed core modules: enrollment, attendance, exams, fees, and staff management.
- Implemented RBAC, JWT auth, and event-driven notifications.
- Deployed on AWS with CI/CD pipelines and ECS for scalability.`,
    colorIndex: 2,
    confidential: true,
  },
  {
    title: "Handwriting to PDF Tool",
    desc: `Created a Python OCR tool to convert handwritten scans into searchable PDFs.
- Used Tesseract, OpenCV for image preprocessing and layout detection.
- Built a Flask API with asynchronous batch processing.
- Integrated AWS S3 for storage and Lambda for serverless processing.`,
    colorIndex: 3,
  },
  {
    title: "RemoteDesktop-Control",
    desc: `Developed a cross-platform remote desktop app with Electron and WebRTC.
- Supported screen sharing, remote control, and encrypted file transfer.
- Implemented a Node.js signaling server and end-to-end encryption.`,
    colorIndex: 4,
  },
  {
    title: "Secure Share",
    desc: `Built a P2P local network file sharing app with secure TLS connections.
- Device discovery using UDP multicast.
- Support for large file transfers with resume and integrity checks.
- Cross-platform clients with React Native and Electron.`,
    colorIndex: 5,
  },
  {
    title: "API Rate Limiter",
    desc: `Created a distributed rate limiter middleware using Redis and Lua scripts.
- Supports multiple limiting strategies and dynamic configs.
- Integrates with Node.js frameworks and API gateways.
- Provides real-time metrics via Prometheus.`,
    colorIndex: 6,
  },
  {
    title: "Cloud Logger",
    desc: `Implemented centralized logging with ELK stack for microservices.
- Configured log forwarding with Filebeat and parsing with Logstash.
- Built Kibana dashboards and alerting rules.
- Automated AWS scaling and secured data with RBAC and encryption.`,
    colorIndex: 0,
  },
];

export default function Projects3DStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const scrollTimeout = useRef(null);
  const containerRef = useRef(null);
  const projectsCount = projects.length;


  const handleWheel = (e) => {
    if (!hovering) return;
    e.preventDefault();
    if (scrollTimeout.current) return;

    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 150);

    if (e.deltaY > 0) {
      setCurrentIndex((i) => (i + 1) % projectsCount);
    } else {
      setCurrentIndex((i) => (i - 1 + projectsCount) % projectsCount);
    }

    
  };


  const touchStartX = useRef(0);
const touchEndX = useRef(0);

const handleTouchStart = (e) => {
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchEnd = (e) => {
  touchEndX.current = e.changedTouches[0].clientX;
  handleSwipe();
};

const handleSwipe = () => {
  const deltaX = touchStartX.current - touchEndX.current;
  if (Math.abs(deltaX) < 50) return; // Ignore tiny swipes

  if (scrollTimeout.current) return;

  scrollTimeout.current = setTimeout(() => {
    scrollTimeout.current = null;
  }, 150);

  if (deltaX > 0) {
    // Swipe left → next project
    setCurrentIndex((i) => (i + 1) % projectsCount);
  } else {
    // Swipe right → previous project
    setCurrentIndex((i) => (i - 1 + projectsCount) % projectsCount);
  }
};


  useEffect(() => {
  const el = containerRef.current;
  if (!el) return;

  // Mouse wheel support
  el.addEventListener("wheel", handleWheel, { passive: false });

  // Touch swipe support
  el.addEventListener("touchstart", handleTouchStart, { passive: true });
  el.addEventListener("touchend", handleTouchEnd, { passive: true });

  // Cleanup
  return () => {
    el.removeEventListener("wheel", handleWheel);
    el.removeEventListener("touchstart", handleTouchStart);
    el.removeEventListener("touchend", handleTouchEnd);
  };
}, [hovering]);


  const getCardSize = () => {
    const width = window.innerWidth;
    if (width < 640) return { width: 300, height: 260 };
    if (width < 1024) return { width: 400, height: 320 };
    return { width: 480, height: 380 };
  };

  const { width: cardWidth, height: cardHeight } = getCardSize();
  const baseSpacing = window.innerWidth < 640 ? 120 : 180;

  return (
    <div
    id="projects"
      className="relative w-full flex flex-col items-center justify-start bg-transparent"
      style={{
        perspective: 1200,
        minHeight: "100vh",
        paddingTop: "4rem",
      }}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-32 text-gray-800 select-none text-center">
        My Projects
      </h2>

      <div
        ref={containerRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-full max-w-7xl flex justify-center items-center"
        style={{
          height: window.innerWidth < 640 ? "260px" : "300px",
        }}
      >
        {projects.map((project, i) => {
          let offset = i - currentIndex;
          if (offset < -projectsCount / 2) offset += projectsCount;
          if (offset > projectsCount / 2) offset -= projectsCount;

          const isVisible = Math.abs(offset) <= 2;
          if (!isVisible) return null;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{
                opacity: offset === 0 ? 1 : 0.6,
                scale: offset === 0 ? 1 : 0.85 - Math.abs(offset) * 0.07,
                x:
                  offset === 0
                    ? 0
                    : offset < 0
                    ? offset * baseSpacing - 30
                    : offset * baseSpacing + 30,
                y: 18 * Math.abs(offset),
                rotateY: offset === 0 ? 0 : offset < 0 ? 25 : -25,
                zIndex: offset === 0 ? 100 : 100 - Math.abs(offset),
                pointerEvents: offset === 0 ? "auto" : "none",
               transition: {
  type: "spring",
  stiffness: 60,
  damping: 16,
  mass: 1,
},

              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 8px 20px 4px ${
                  pastelColors[project.colorIndex % pastelColors.length] ||
                  "#ccc"
                }`,
                transition: { duration: 0.3 },
              }}
              className="absolute top-1/2 left-1/2 rounded-3xl cursor-pointer select-none"
              style={{
                width: cardWidth,
                height: cardHeight,
                transformOrigin: "center center",
                translateX: "-50%",
                translateY: "-50%",
                backgroundColor:
                  pastelColors[project.colorIndex % pastelColors.length] ||
                  "#ccc",
                border: `3px solid ${
                  pastelColors[project.colorIndex % pastelColors.length] ||
                  "#ccc"
                }`,
                boxShadow: `0 6px 18px 0 ${
                  pastelColors[project.colorIndex % pastelColors.length] ||
                  "#ccc"
                }88`,
                color: "#333",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-[70%] truncate"
                  style={{
                    textShadow: "1px 1px 2px rgba(255,255,255,0.9)",
                  }}
                >
                  {project.title}
                </h3>
                {project.confidential && (
                  <span
                    className="font-semibold px-3 py-1 rounded-xl select-none text-sm"
                    style={{
                      backgroundColor: "#fff",
                      color: apexcolors[project.colorIndex] || "#7a53ff",
                      boxShadow: `0 0 8px 2px ${
                        apexcolors[project.colorIndex] || "#7a53ff"
                      }77`,
                    }}
                  >
                    Confidential
                  </span>
                )}
              </div>

              <p
                className="leading-relaxed text-sm sm:text-base md:text-lg line-clamp-6"
                style={{
                  color: "#444",
                  flexGrow: 1,
                  overflow: "hidden",
                }}
              >
                {project.desc}
              </p>

              {offset === 0 && (
                <motion.div
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 font-semibold text-sm sm:text-base text-gray-600"
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {i + 1} / {projectsCount}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
