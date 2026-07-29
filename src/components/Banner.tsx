"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DownloadLink from "./DownloadLink";

export default function Banner(){
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
          <motion.div>
            {/* <section className="relative h-screen w-full">
              

              <div className="absolute inset-0 bg-[#192553]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-10">
                <div className="flex flex-row md:flex-column w-full mt-12">
                  <div className="w-1/2 h-64 md:h-128 overflow-hidden group relative">
                    <h1 className="text-5xl font-bold md:text-7xl font-sans text-left pb-4">My SDH</h1>
                    <p className="text-base max-w-lg text-xl font-sans pt-4 text-left">My SDH brings parent and teachers together through one connected platform. Access daily learning information, share classroom experiences, and strengthen the partnership that supports every student's growth.</p>
                  </div>
                  <div className="w-1/2 h-64 md:h-128 overflow-hidden group relative">
                    <Image src="/banner-model.png" alt="Main Banner" fill className="object-cover" />
                  </div>
                </div>
              </div>
                
            </section> */}

            {/* <section className="relative min-h-screen md:h-screen w-full bg-[#0a1a4a] overflow-hidden pt-16">
              <div className="flex flex-col md:block h-full">
                <div className="relative md:absolute md:inset-0 flex flex-col justify-center text-white z-10 p-10 sm:pt-20 md:pt-10 md:pr-[45%]">
                  <h1 className="text-5xl font-bold md:text-7xl font-sans text-center md:text-left pb-4">My SDH</h1>
                  <p className="text-base max-w-lg text-xl font-sans pt-4 text-center md:text-left">
                    My SDH brings parent and teachers together through one connected platform. Access daily learning information, share classroom experiences, and strengthen the partnership that supports every student's growth.
                  </p>
                </div>

                <div className="relative w-full aspect-[16/15] md:aspect-auto md:absolute md:bottom-0 md:right-0 md:w-1/2 md:h-[95%] z-10">
                  <Image
                    src="/banner-model.png"
                    alt="Main Banner"
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
            </section> */}
            <section className="relative w-full bg-[#0a1a4a] h-[900px] sm:h-[1000px] md:h-[700px] lg:h-[800px] flex items-center z-10 overflow-hidden pt-35 md:pt-2">
              <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 items-center">

                  <div className="relative z-10 text-[#dde4ed] pt-15 md:pt-0">
                    <h1 className="font-sans font-bold text-5xl md:text-4xl pb-4 text-center md:text-left">
                      My SDH
                    </h1>
                    <h1 className="font-sans font-bold text-5xl md:text-6xl pb-4 text-center md:text-left text-[#dde4ed]">
                      One Connected Experience for School and Home 
                    </h1>
                    {/* <p className="font-sans text-base md:text-xl pb-4 text-center md:text-left text-white">
                      My SDH brings parents and teachers together through one connected platform. Access daily learning information, share classroom experiences, and strengthen the partnership that supports every student's growth.
                    </p> */}
                    <h1 className="font-sans font-bold text-base pb-4 md:text-4xl text-center md:text-left text-[#1279be]">
                      Stay Connected. Stay Informed. Grow Together.
                    </h1>
                    <div className="mt-4 flex justify-center md:justify-start">
                      <Link href="/#download" onClick={handleClick} className="rounded border border-[#dde4ed] text-[#dde4ed] px-6 py-3 font-semibold font-sans uppercase font-medium transition hover:bg-[#1279be] hover:border-[#1279be] hover:text-[#0a1a4a]">
                        Download now
                      </Link>
                    </div>
                  </div>

                  {/* Image column */}
                  <div className="relative flex justify-center md:justify-end -mb-[100px] md:-mb-16 z-10">
                    <div className="relative w-full sm:max-w-lg md:max-w-xl aspect-[3/4]">
                      <Image
                        src="/banner-model.png"
                        alt="Main Banner"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </motion.div>
        </>
    )
}