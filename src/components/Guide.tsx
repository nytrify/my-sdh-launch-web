"use client"
import { useInView } from "@/app/hooks/UseInView";
import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";

function BgDecor(){
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* soft glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-400/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      
      {/* grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 2px, transparent 2px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}

export default function Guide() {

  const { ref: headingRef, isInView: headingInView } = useInView();
  const { ref: textRef, isInView: textInView } = useInView();
  const { ref: videoRef, isInView: videoInView } = useInView();

    return (
        <>
            <section className="relative justify-center items-center w-full h-max bg-white flex py-30">
              <div className="flex flex-col md:flex-row items-center gap-6 w-5/6">               
                <div className="order-2 md:order-1 w-full md:w-1/2 h-auto group relative">
                  <div ref={videoRef as React.RefObject<HTMLDivElement>} 
                      className={`flex items-center justify-center gap-4 transition-all duration-1000 ease-out delay-300 ${videoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <VideoPlayer src="/sdh-logo-vid.mp4"/>
                  </div>
                </div>

                <div className="order-1 md:order-2 w-full md:w-1/2 group relative">
                  <div ref={headingRef as React.RefObject<HTMLDivElement>} 
                      className={`flex items-center gap-4 px-10 pb-6 transition-all duration-700 ease-out ${headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h1 className="text-5xl font-bold md:text-5xl text-[#192553] font-sans text-center md:text-left">Discover MySDH in Just A Few Minutes</h1>
                  </div>
                  <div ref={textRef as React.RefObject<HTMLDivElement>} 
                      className={`flex items-center gap-4 px-10 py-2 text-center md:text-left transition-all duration-700 ease-out delay-150 ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <p className="md:text-xl text-[#192553] font-sans">Watch a quick overview to learn how MySDH supports communication between school and home.</p>
                  </div>
                  <div ref={textRef as React.RefObject<HTMLDivElement>} 
                      className={`flex items-center gap-4 px-10 py-2 text-center md:text-left transition-all duration-700 ease-out delay-150 ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <p className="md:text-xl text-[#192553] font-sans">MySDH brings parents and teachers together through one connected platform. Access daily learning information, share classroom experiences, and strengthen the partnership that supports every student's growth.</p>
                  </div>                  
                </div>

              </div>              
            </section>

            <section className="relative w-full">
              {/* <Image src="/DSC09549.JPG" alt="Main Banner" fill className="object-cover" /> */}
              <div className="inset-0 flex flex-col items-center justify-center text-center bg-white">
                <h1 className="text-5xl font-bold md:text-7xl z-10 font-sans text-[#192553] p-10">Explore the User's Guide</h1>
                <h1 className="text-base md:text-3xl z-10 font-sans text-[#192553] px-10">A Better Way To Stay Connected</h1>
                <p className="max-w-lg pt-4 z-10 font-sans text-[#192553] px-8">Education is most effective when schools and families work together. MySDH makes communication simple, meaningful, and accessible—helping everyone stay connected to each student's learning journey. Start exploring the application guide based on your needs.</p>
                <div className="flex w-full mt-12">
                  <div className="w-1/2 h-64 md:h-96 overflow-hidden group relative">
                    <Image src="/SDH08624.jpg" alt="Parent Guide" fill className="object-cover" />
                    <Link href="/parent-guide">
                    <div className="absolute inset-0 bg-[#15396B]/60 group-hover:bg-[#15396B]/90 transition-colors duration-300"/>
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <h1 className="text-white font-sans md:text-2xl font-bold absolute group-hover:opacity-0 transition-opacity duration-300">Parent Guide</h1>
                        <div className="flex-column">
                          <p className="max-w-lg pt-4 font-sans text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Stay informed about your child's learning experiences, classroom activities, and important school updates.</p>
                          <p className="max-w-lg pt-4 font-sans text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to view guide.</p>
                        </div>
                      </div>
                    </Link>                  
                  </div>
                  <div className="w-1/2 h-64 md:h-96 overflow-hidden group relative">
                    <Image src="/DSC09093.jpg" alt="Parent Guide" fill className="object-cover" />
                    <Link href="/teacher-guide">
                    <div className="absolute inset-0 bg-[#15396B]/60 group-hover:bg-[#15396B]/90 transition-colors duration-300"/>
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <h1 className="text-white font-sans md:text-2xl font-bold absolute group-hover:opacity-0 transition-opacity duration-300">Teacher Guide</h1>
                        <div className="flex-column">
                          <p className="max-w-lg pt-4 font-sans text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Share learning experiences, communicate classroom activities, and keep parent engaged throughout the school year.</p>
                          <p className="max-w-lg pt-4 font-sans text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to view guide.</p>
                        </div>
                      </div>
                    </Link>                  
                  </div>                  
                </div>
              </div>
            </section>
        </>
    )
}