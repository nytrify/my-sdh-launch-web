'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TipsSection() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative h-[600px] md:h-[500px] w-full overflow-hidden">
      {/* Background image */}
      <Image src="/SDH01384.JPG" alt="Tips background" fill className="object-cover" />
      <div className="absolute inset-0 bg-[#0a1a4a]/70" />

      {/* Dark navy overlay - fades in on click */}
      <div
        className={`absolute inset-0 bg-[#0a1a4a] transition-opacity duration-700 ease-in-out
          ${isRevealed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Content layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10">
        {!isRevealed ? (
          <h1
            onClick={() => setIsRevealed(true)}
            className="text-5xl font-bold md:text-5xl font-sans rounded-lg border border-[#dde4ed] text-[#dde4ed] transition hover:scale-125 text-center z-10 p-2 cursor-pointer"
          >
            Tips for Parents
          </h1>
        ) : (
          <div className="z-10 text-center transition-opacity duration-700 ease-in-out opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.3s_forwards]">
            <h2 className="text-4xl font-bold font-sans mb-4">To get the most out of MySDH:</h2>
            <ul className="list-disc md:text-xl pl-6 text-left space-y-2 font-sans text-[#dde4ed] py-4">
              <li>Check Today's Student Agenda regularly to stay informed about your child's learning.  </li>
              <li>Review Student Updates to follow your child's learning experiences.</li>
              <li>Keep your contact information up to date.</li>
              <li>Keep your login credentials secure.</li>
              <li>Update the app whenever a new version is available.</li>
            </ul> 
            <button
              onClick={() => setIsRevealed(false)}
              className="mt-6 font-sans rounded border border-[#dde4ed] px-4 py-2 text-sm hover:bg-[#dde4ed] hover:text-[#0a1a4a] transition"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}