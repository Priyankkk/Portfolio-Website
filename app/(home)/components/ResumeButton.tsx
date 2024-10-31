import React from 'react';

export default function ResumeButton() {
  return (
    <div>   
      <a 
        href="/resume.pdf"  // Updated path to PDF file
        target="_blank"      // Opens PDF in a new tab
        rel="noopener noreferrer" // Security best practice for external links
        className="bg-green-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        View Resume 📄
      </a>
    </div>
  );
}
