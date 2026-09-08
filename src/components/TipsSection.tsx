'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TipsSection() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative h-[600px] md:h-[500px] w-full overflow-hidden">
      <Image src="/SDH01384.JPG" alt="Tips background" fill className="object-cover" />
      <div className="absolute inset-0 bg-[#0a1a4a]/80" />

      <div
        className={`absolute inset-0 bg-[#0a1a4a] transition-opacity duration-700 ease-in-out
          ${isRevealed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10">
          <div className="z-10 text-center transition-opacity duration-700 ease-in-out opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.3s_forwards]">
            <h2 className="text-4xl font-bold font-sans mb-4">To get the most out of MySDH:</h2>
            <ul className="list-disc md:text-xl pl-6 text-left space-y-2 font-sans text-[#dde4ed] py-4">
              <li>Check Today's Student Agenda regularly to stay informed about your child's learning.  </li>
              <li>Review Student Updates to follow your child's learning experiences.</li>
              <li>Keep your contact information up to date.</li>
              <li>Keep your login credentials secure.</li>
              <li>Update the app whenever a new version is available.</li>
            </ul> 
          </div>
      </div>
    </div>
  );
}