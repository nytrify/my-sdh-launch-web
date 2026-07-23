"use client"
import Image from "next/image";
import Link from "next/link";


export default function Guide() {
    return (
        <>
            <section className="relative justify-center items-center h-screen w-full bg-linear-65 from-white to-[#faecd7] flex">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4 px-10">
                  <h1 className="text-5xl font-bold md:text-5xl text-[#192553] font-sans text-center md:text-left">Discover My SDH in Just A Few Minutes</h1>
                </div>
                <div className="flex items-center gap-4 px-10 text-center md:text-left">
                  <p className="md:text-xl text-[#1279be] font-sans">Watch a quick overview to learn how My SDH supports communitcation between school and home.</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <video 
                    controls
                    className="w-3/4 md:w-full max-w-3xl rounded-lg"
                    muted
                    loop
                  >
                    <source src="/introduction-mysdh.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>              
            </section>

            <section className="relative md:min-h-screen w-full">
              {/* <Image src="/DSC09549.JPG" alt="Main Banner" fill className="object-cover" /> */}
              <div className="inset-0 flex flex-col items-center justify-center text-center bg-white">
                <h1 className="text-5xl font-bold md:text-7xl z-10 font-sans text-[#192553] p-10">Welcome To My SDH</h1>
                <h1 className="text-base md:text-3xl z-10 font-sans text-[#192553] px-10">A Better Way To Stay Connected</h1>
                <p className="max-w-lg pt-4 z-10 font-sans text-[#1279be] px-8">Education is most effective when schools and families work together. My SDH makes communication simple, meaningful, and accessible—helping everyone stay connected to each student's learning journey. </p>
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