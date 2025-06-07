import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { apexcolors } from "../themes/apexcolors";


const pastelColors = [
  "#A6DCEF", // soft sky blue
  "#F9D5E5", // pastel pink
  "#FFF5BA", // light yellow
  "#C1E1C1", // mint green
  "#FFD6A5", // soft orange
  "#E2C2FF", // lavender purple
  "#B5EAEA", // pale cyan
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
    colorIndex: 7,
  }
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

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (el) el.removeEventListener("wheel", handleWheel);
    };
  }, [hovering]);

  return (
    <div
      className="relative w-full flex flex-col items-center justify-start overflow-visible bg-transparent"
      style={{
        perspective: 1200,
        height: "100vh",
        pointerEvents: "auto",
        paddingTop: "6rem",
      }}
    >
      <h2 className="text-8xl font-bold mb-[180px] text-gray-800 select-none">
        My Projects
      </h2>

      {/* Scrollable Container with Fixed Height */}
      <div
        ref={containerRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{
          height: "300px",           // Your desired scroll window height
          width: "100%",
          overflow: "visible",
          pointerEvents: "auto",
        }}
        className="relative w-full max-w-7xl flex justify-center items-center"
      >
        {projects.map((project, i) => {
          let offset = i - currentIndex;
          if (offset < -projectsCount / 2) offset += projectsCount;
          if (offset > projectsCount / 2) offset -= projectsCount;
          const isVisible = Math.abs(offset) <= 5;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{
                opacity: isVisible ? (offset === 0 ? 1 : 0.6) : 0,
                scale: offset === 0 ? 1 : 0.85 - Math.abs(offset) * 0.07,
                x:
                  offset === 0
                    ? 0
                    : offset < 0
                      ? offset * 200 - 40    // increased gap on left side
                      : offset * 180 + 40,   // increased gap on right side
                y: 18 * Math.abs(offset),    // slightly more vertical spacing
                rotateY: offset === 0 ? 0 : offset < 0 ? 25 : -25,
                zIndex: offset === 0 ? 100 : 100 - Math.abs(offset),
                pointerEvents: offset === 0 ? "auto" : "none",
                transition: { type: "spring", stiffness: 160, damping: 20 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 8px 20px 4px ${pastelColors[project.colorIndex % pastelColors.length] || "#ccc"}`,
                transition: { duration: 0.3 },
              }}
              className="absolute top-1/2 left-1/2 rounded-3xl cursor-pointer select-none"
              style={{
                width: 480,           // increased from 400
                height: 380,          // increased from 320
                transformOrigin: "center center",
                translateX: "-50%",
                translateY: "-50%",
                backgroundColor:
                  pastelColors[project.colorIndex % pastelColors.length] || "#ccc",
                border: `3px solid ${pastelColors[project.colorIndex % pastelColors.length] || "#ccc"}`,
                boxShadow: `0 6px 18px 0 ${pastelColors[project.colorIndex % pastelColors.length] || "#ccc"}88`,
                color: "#333",
                display: "flex",
                flexDirection: "column",
                padding: "24px",
              }}
            >
              <div className="flex justify-between items-center mb-5">
                <h3
                  className="text-4xl font-extrabold max-w-[70%] truncate"
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
                      boxShadow: `0 0 8px 2px ${apexcolors[project.colorIndex] || "#7a53ff"}77`,
                      fontWeight: "700",
                    }}
                  >
                    Confidential
                  </span>
                )}
              </div>

              <p
                className="leading-relaxed text-1/2xl line-clamp-6"
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
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 font-semibold text-lg select-none"
                  style={{
                    color: "#555",
                    textShadow: "0 0 8px rgba(255,255,255,0.8)",
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                  }}
                >
                  {i + 1} / {projectsCount}
                </motion.div>
              )}
            </motion.div>








            // <motion.div
            //   key={i}
            //   initial={{ opacity: 0, scale: 0.8, y: 50 }}
            //   animate={{
            //     opacity: isVisible ? (offset === 0 ? 1 : 0.6) : 0,
            //     scale: offset === 0 ? 1.05 : 0.8 - Math.abs(offset) * 0.05,
            //     x:
            //       offset === 0
            //         ? 0
            //         : offset < 0
            //         ? offset * 140 - 40
            //         : offset * 120 + 40,
            //     y: 20 * Math.abs(offset),
            //     rotateY: offset === 0 ? 0 : offset < 0 ? 25 : -25,
            //     zIndex: offset === 0 ? 100 : 100 - Math.abs(offset),
            //     pointerEvents: offset === 0 ? "auto" : "none",
            //     transition: { type: "spring", stiffness: 150, damping: 25 },
            //   }}
            //   className="absolute top-1/2 left-1/2 rounded-3xl shadow-2xl border-8 cursor-pointer select-none"
            //   style={{
            //     width: 420,
            //     height: 320,
            //     transformOrigin: "center center",
            //     translateX: "-50%",
            //     translateY: "-50%",
            //     borderColor: apexcolors[project.colorIndex] || "#ccc",
            //     backgroundImage: `linear-gradient(135deg, ${apexcolors[project.colorIndex]}55, ${apexcolors[project.colorIndex]}22)`,
            //   }}
            // >
            //   <div className="flex flex-col h-full p-8 text-white">
            //     <div className="flex justify-between items-center mb-4">
            //       <h3 className="text-3xl font-extrabold max-w-[70%] truncate">
            //         {project.title}
            //       </h3>
            //       {project.confidential && (
            //         <span className="font-bold bg-white bg-opacity-30 px-3 py-1 rounded-lg select-none text-sm">
            //           Confidential
            //         </span>
            //       )}
            //     </div>
            //     <p className="leading-relaxed text-sm line-clamp-6">
            //       {project.desc}
            //     </p>
            //   </div>
            //   {offset === 0 && (
            //     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-semibold text-lg text-white">
            //       {i + 1} / {projectsCount}
            //     </div>
            //   )}
            // </motion.div>
          );
        })}
      </div>
    </div>
  );
}
