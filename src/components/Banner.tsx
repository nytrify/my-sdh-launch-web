"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";


export default function Banner(){

    return (
        <>
          <motion.div>
            <section className="relative h-screen w-full">
              <Image src="/SDH01384.JPG" alt="Main Banner" fill className="object-cover" />

              <div className="absolute inset-0 bg-black/40" />
              
              {/* <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              /> */}

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                <h1 className="text-5xl font-bold md:text-7xl">My SDH</h1>
                <p className="text-base max-w-lg text-xl">My SDH brings parents and teachers together through one connected platform. Access daily learning information, share classroom experiences, and strengthen the partnership that supports every student's growth.</p>
              </div>
            </section>
            
            <section className="relative justify-center items-center h-screen w-full bg-linear-65 from-white to-[#faecd7] flex">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4">
                  <h1 className="text-5xl font-bold md:text-5xl text-black">Discover My SDH in Just A Few Minutes</h1>
                </div>
                <div className="flex items-center gap-4">
                  <p className="md:text-xl text-black">Watch a quick overview to learn how My SDH supports communitcation between school and home.</p>
                </div>
                <div className="flex items-center gap-4">
                  <video 
                    controls
                    className="w-full max-w-3xl rounded-lg"
                    muted
                    loop
                  >
                    <source src="/sdh-logo-vid.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>              
            </section>

            <section className="relative min-h-screen w-full">
              {/* <Image src="/DSC09549.JPG" alt="Main Banner" fill className="object-cover" /> */}
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black bg-white">
                <h1 className="text-5xl font-bold md:text-7xl z-10">Welcome To My SDH</h1>
                <h1 className="text-base md:text-3xl z-10">A Better Way To Stay Connected</h1>
                <p className="max-w-lg pt-4 z-10">Education is most effective when schools and families work together. My SDH makes communication simple, meaningful, and accessible—helping everyone stay connected to each student's learning journey. </p>
                <div className="flex w-full max-w-4xl mt-12">
                  <div className="w-1/2 text-center z-10">
                    <h1 className="text-base md:text-3xl">For Parents</h1>
                    <p className="max-w-lg pt-4">Stay informed about your child's learning experiences, classroom activities, and important school updates. </p>
                  </div>
                  <div className="w-1/2 text-center z-10">
                    <h1 className="text-base md:text-3xl">For Teachers</h1>
                    <p className="max-w-lg pt-4">Share learning experiences, communicate classroom activities, and keep parents engaged throughout the school year. </p>
                  </div>
                </div>
                <div className="flex w-full mt-12">
                  <div className="w-1/2 h-64 md:h-96 overflow-hidden group relative">
                    <Image src="/DSC09093.JPG" alt="Teachers Guide" fill className="object-cover" />
                    <a href="">
                      <div className="absolute inset-0 bg-[#15396B]/50 group-hover:bg-[#15396B]/60 transition-colors duration-300"/>
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <h1 className="text-white">Teachers Guide</h1>
                      </div>                      
                    </a>
                    <div className="absolute inset-0 bg-[#15396B]/50 group-hover:bg-[#15396B]/90 transition-colors duration-300"/>
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <h1 className="text-white">Teachers Guide</h1>
                    </div>
                  </div>
                  <div className="w-1/2 h-64 md:h-96 overflow-hidden group relative">
                    <Image src="/SDH08624.JPG" alt="Parents Guide" fill className="object-cover" />
                    <a href="">
                    <div className="absolute inset-0 bg-[#15396B]/50 group-hover:bg-[#15396B]/90 transition-colors duration-300"/>
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <h1 className="text-white">Parents Guide</h1>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </section>

            <section className="justify-center items-center w-full bg-linear-65 from-white to-[#faecd7] flex py-6">
              <div className="flex flex-col items-center justify-center text-center text-black z-10">
                <h1 className="text-base md:text-3xl">Start Using My SDH Today</h1>
                <div className="flex w-full max-w-4xl mt-12 pb-6">
                  <div className="w-1/2 text-center z-10">
                    <h1 className="text-base md:text-3xl">For Parents</h1>
                    <p className="max-w-lg pt-4">Ready to Stay Connected with Your Child's Learning?</p>
                    <p className="max-w-lg pt-4">Download My SDH today and stay informed about your child's learning journey, classroom activities, and important school updates—all in one place. </p>
                  </div>
                  <div className="w-1/2 text-center z-10">
                    <h1 className="text-base md:text-3xl">For Teachers</h1>
                    <p className="max-w-lg pt-4">Ready to Start Sharing Meaningful Learning Experiences?</p>
                    <p className="max-w-lg pt-4">Download My SDH today and begin sharing classroom activities, learning highlights, and important updates that strengthen the partnership between school and home. </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-10">
                  <a href="">
                    <Image src="/appstore.jpg" alt="App Store" width={250} height={80}/>
                  </a>
                  <a href="">
                    <Image src="/googleplay.jpg" alt="Play Store" width={250} height={80}/>
                  </a>
                </div>
              </div>           
            </section>
            <section className="justify-center items-center w-full bg-white flex py-6">
              <div className="flex flex-col text-black z-10">
                <div className="flex w-full mt-12">
                  <div className="w-1/2 text-center z-10">
                    <h1 className="text-5xl font-bold md:text-4xl">Frequently Asked Questions</h1>
                    <div className="flex w-full max-w-4xl mt-12 pb-6">
                      <div className="w-1/2 text-center z-10">
                        <h1 className="text-base md:text-3xl">Parents</h1>
                        <ul className="list-disc pl-6 text-left space-y-2">
                          <li>How do I log in?</li>
                          <li>How do I reset my password? </li>
                          <li>Why can't I see the Agenda? </li>
                          <li>Why is Student Update not available? </li>
                          <li>Can I access more than one child? </li>
                        </ul>
                      </div>
                      <div className="w-1/2 text-center z-10">
                        <h1 className="text-base md:text-3xl">Teachers</h1>
                        <ul className="list-disc pl-6 text-left space-y-2">
                          <li>How do I publish an Agenda?</li>
                          <li>Can I edit a Student Update after publishing?  </li>
                          <li>What types of photos should I upload?  </li>
                          <li>Why can't parents see my post?  </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 text-center z-10">
                    <h1 className="text-5xl font-bold md:text-4xl">Need Help?</h1>
                    <p className="text-base md:text-xl pt-6">If you need assistance, please contact your school or our support team. </p>
                    <div className="flex w-full max-w-4xl mt-12 pb-6">
                      <div className="w-1/2 text-center">
                        <h1 className="text-base md:text-3xl">Parents Support</h1>
                        <a href="" className="flex items-center">
                          <MdEmail />
                          <p>IT Support</p>
                        </a>
                        <a href="" className="flex items-center">
                          <IoLogoWhatsapp />
                          <p>School Administrator</p>
                        </a>
                      </div>
                      <div className="w-1/2 text-center">
                        <h1 className="text-base md:text-3xl">Teachers Support</h1>
                        <a href="" className="flex items-center">
                          <MdEmail />
                          <p>Email Support</p>
                        </a>
                        <a href="" className="flex items-center">
                          <IoLogoWhatsapp />
                          <p>School Contact</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>                
              </div>
            </section>
          </motion.div>
        </>
    )
}