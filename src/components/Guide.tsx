"use client"
import { useInView } from "@/app/hooks/UseInView";
import Image from "next/image";
import Link from "next/link";


export default function Guide() {

  const { ref: headingRef, isInView: headingInView } = useInView();
  const { ref: textRef, isInView: textInView } = useInView();
  const { ref: videoRef, isInView: videoInView } = useInView();

    return (
        <>
            <section className="relative justify-center items-center h-screen w-full bg-[#dde4ed] flex">
              <div className="flex flex-col md:flex-row items-center gap-6 w-5/6">               
                <div className="w-full md:w-1/2 md:h-72 group relative">
                  <div ref={videoRef as React.RefObject<HTMLDivElement>} 
                      className={`flex items-center justify-center gap-4 transition-all duration-1000 ease-out delay-300 ${videoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <video 
                      controls
                      className="w-3/4 md:w-full max-w-3xl rounded-lg"
                      muted
                      loop
                    >
                      <source src="/introduction-mysdh-new.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:h-64 group relative">
                  <div ref={headingRef as React.RefObject<HTMLDivElement>} 
                      className={`flex items-center gap-4 px-10 py-2 transition-all duration-700 ease-out ${headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h1 className="text-5xl font-bold md:text-5xl text-[#192553] font-sans text-center md:text-left">Discover My SDH in Just A Few Minutes</h1>
                  </div>
                  <div ref={textRef as React.RefObject<HTMLDivElement>} 
                      className={`flex items-center gap-4 px-10 py-2 text-center md:text-left transition-all duration-700 ease-out delay-150 ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <p className="md:text-xl text-[#1279be] font-sans">Watch a quick overview to learn how My SDH supports communication between school and home.</p>
                  </div>
                  <div ref={textRef as React.RefObject<HTMLDivElement>} className="flex justify-center place-content-center">
                    <div className="h-[3px] w-[60px] bg-[#0a1a4a] my-2"></div>
                  </div>
                  <div ref={textRef as React.RefObject<HTMLDivElement>} 
                      className={`flex items-center gap-4 px-10 py-2 text-center md:text-left transition-all duration-700 ease-out delay-150 ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <p className="md:text-xl text-[#1279be] font-sans">My SDH brings parents and teachers together through one connected platform. Access daily learning information, share classroom experiences, and strengthen the partnership that supports every student's growth.</p>
                  </div>                  
                </div>

              </div>              
            </section>

            <section className="relative md:min-h-screen w-full">
              {/* <Image src="/DSC09549.JPG" alt="Main Banner" fill className="object-cover" /> */}
              <div className="inset-0 flex flex-col items-center justify-center text-center bg-[#1279be]">
                <h1 className="text-5xl font-bold md:text-7xl z-10 font-sans text-[#192553] p-10">Explore the User's Guide</h1>
                <h1 className="text-base md:text-3xl z-10 font-sans text-[#192553] px-10">A Better Way To Stay Connected</h1>
                <p className="max-w-lg pt-4 z-10 font-sans text-white px-8">Education is most effective when schools and families work together. My SDH makes communication simple, meaningful, and accessible—helping everyone stay connected to each student's learning journey. Start exploring the application guide based on your needs.</p>
                <div className="flex w-full mt-12">
                  <div className="w-1/2 h-64 md:h-96 overflow-hidden group relative">
                    <Image src="/SDH08624.JPG" alt="Parent Guide" fill className="object-cover" />
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