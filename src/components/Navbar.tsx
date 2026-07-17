"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react"

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: "Home", href:"#home"},
    { label: "Guide", href:"#guide"},
    { label: "Download", href:"#download"},
    { label: "FAQ", href:"#faq"}
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;
      for(const link of navLinks){
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if(el){
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if(scrollPosition >= top && scrollPosition < top + height){
            setActiveSection(id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <>
      <header className={"fixed top-0 left-0 right-0 z-50 bg-[#FFFFED] py-5"}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="SDH Logo"
              width={128}
              height={128}
              className="mr-3 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navbar Links*/}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${isActive ? "text-[#2F78D8]" : "text-[#15396B] hover:text-[#2F78D8]"}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow-bright"
                      transition={{ type: "spring", stiffness: 300, damping: 30}}
                    />
                  )}
                </a>
              )
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
