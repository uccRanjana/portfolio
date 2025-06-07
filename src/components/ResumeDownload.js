

export default function ResumeDownload() {
  return (
    <a
      href="/path/to/your_resume.pdf"  // yahan apna local ya hosted PDF ka path dalo
      download
      className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Resume
    </a>
  );
}

