"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaPhoneAlt, FaInstagram, FaFacebook, FaYoutube, FaTiktok  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B2354] text-white">
      <div className="w-full mx-auto px-6 py-6">
        <div className="flex flex-col justify-center items-center justify-start md:flex-row gap-12 md:gap-24">
            <Image
              src="/sdh-logo-white.png"
              alt="SDH Logo"
              width={128}
              height={128}
              className="mr-3 object-contain transition-transform duration-300 group-hover:scale-105"
            />

          <div className="flex flex-row items-center justify-center">
            <h3 className="font-bold text-sm tracking-wide font-sans">© 2025 OneSDH - All Rights Reserved</h3>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center gap-4 mt-16">
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/dianharapansch/" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0B2354] transition-colors duration-300">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@sekolahdianharapan" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0B2354] transition-colors duration-300">
              <FaTiktok />
            </a>
            <a href="https://www.facebook.com/Dianharapanofficial" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0B2354] transition-colors duration-300">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/channel/UCn6X9HyL_8Uvjb1JH-39QZg" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0B2354] transition-colors duration-300">
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm">Copyright © 2026 Dian Harapan School</p>
        </div> */}
      </div>
    </footer>
  )
}