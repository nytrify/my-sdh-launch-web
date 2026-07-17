"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Banner(){

    return (
        <>
          <motion.div>
            <section className="relative h-screen w-full">
              <Image src="/SDH01384.JPG" alt="Main Banner" fill className="object-cover" />

              <div className="absolute inset-0 bg-black/40" />
              
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                <h1 className="text-5xl font-bold md:text-7xl">My SDH</h1>
                <h1 className="mt-4 text-lg md:text-2xl">One Connected Experience for School and Home</h1>
                <p className="text-base max-w-lg ">My SDH brings parents and teachers together through one connected platform. Access daily learning information, share classroom experiences, and strengthen the partnership that supports every student's growth.</p>
              </div>
            </section>
            
            <section className="relative h-screen w-full bg-white flex">
              <div className="w-1/2 flex items-center gap-4">
                <a href="">
                  <Image src="/appstore.jpg" alt="App Store" width={250} height={80}/>
                </a>
                <a href="">
                  <Image src="/googleplay.jpg" alt="App Store" width={250} height={80}/>
                </a>
              </div>
              <div className="w-1/2">
                <h1>Right</h1>
              </div>
            </section>
          </motion.div>
        </>
    )
}