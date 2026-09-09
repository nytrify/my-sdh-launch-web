"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B2354] text-white">
      <div className="w-full mx-auto px-6 py-6">
        <div className="flex flex-col justify-center items-center justify-start md:flex-row gap-12 md:gap-24">
            {/* <Image
              src="/sdh-logo-white.png"
              alt="SDH Logo"
              width={128}
              height={128}
              className="mr-3 object-contain transition-transform duration-300 group-hover:scale-105"
            /> */}

          <div className="flex flex-row items-center justify-center">
            <h3 className="font-bold text-sm tracking-wide font-sans">© 2026 MySDH - All Rights Reserved</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}