"use client";

import Image from "next/image";
import Link from "next/link";
import DownloadLink from "./DownloadLink";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
    }
    // if not on '/', let the Link navigate normally — Next handles the hash on arrival
  }

  return (
    <>
      <header className={"fixed top-0 left-0 right-0 z-50 bg-[#FFFFED]/60 inset-shadow-black py-5 backdrop-blur-md shadow-lg/20"}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="SDH Logo"
              width={128}
              height={128}
              className="mr-3 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navbar Links*/}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              key="Home"
              href="/"
              className="text-sm font-semibold font-sans tracking-wide uppercase transition-colors duration-200 text-[#15396B] hover:text-[#2F78D8]"
            >
              Home
            </a>
            <Link 
              href="/parent-guide" 
              className="text-sm font-semibold font-sans tracking-wide uppercase transition-colors duration-200 text-[#15396B] hover:text-[#2F78D8]">
                Parent Guide
            </Link>
            <Link 
              href="/teacher-guide" 
              className="text-sm font-semibold font-sans tracking-wide uppercase transition-colors duration-200 text-[#15396B] hover:text-[#2F78D8]">
                Teacher Guide
            </Link>
            <DownloadLink />
          </nav>

           {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-blue-dark hover:text-brand-blue transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#15396B]" /> : <Menu className="w-6 h-6 text-[#15396B]" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-transparent border-b border-brand-blue-light/10 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col space-y-6">
                <a
                  key="Home"
                  href="/"
                  className="text-sm font-semibold font-sans tracking-wide uppercase transition-colors duration-200 text-[#15396B] hover:text-[#2F78D8]"
                >
                  Home
                </a>
                <Link 
                  href="/parent-guide" 
                  className="text-sm font-semibold font-sans tracking-wide uppercase transition-colors duration-200 text-[#15396B] hover:text-[#2F78D8]">
                    Parent Guide
                </Link>
                <Link 
                  href="/teacher-guide" 
                  className="text-sm font-semibold font-sans tracking-wide uppercase transition-colors duration-200 text-[#15396B] hover:text-[#2F78D8]">
                    Teacher Guide
                </Link>
                <Link href="/#download" onClick={handleClick} className="text-[#15396B] font-semibold font-sans uppercase transition">
                  Download
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </header>
    </>
  );
}
