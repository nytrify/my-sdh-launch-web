"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function BackgroundDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* base texture */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      
      {/* glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" />
      
      {/* outline rings for detail */}
      <div className="absolute top-16 right-1/3 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute bottom-24 left-20 w-20 h-20 border border-white/10 rounded-full" />
      
      {/* accent line */}
      <svg className="absolute bottom-0 left-0 w-2/3 opacity-10" viewBox="0 0 800 200" preserveAspectRatio="none">
        <path d="M 0 150 Q 200 50 400 100 Q 600 150 800 50" stroke="#22D3EE" strokeWidth="1" fill="none" />
      </svg>
    </div>
  )
}

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
            <section className="relative w-full bg-[#0a1a4a] h-[900px] sm:h-[1000px] md:h-[700px] lg:h-[800px] flex items-center z-10 overflow-hidden pt-35 md:pt-2">
              <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
                <BackgroundDecor />
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