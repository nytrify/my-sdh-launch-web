"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Banner(){

    return (
        <>
          <motion.div>
            <section className="relative h-screen w-full">
              <Image src="/SDH01384.JPG" alt="Main Banner" fill className="object-cover" />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-10">
                <h1 className="text-5xl font-bold md:text-7xl font-sans text-left pb-4">My SDH</h1>
                <p className="text-base max-w-lg text-xl font-sans pt-4 text-left">My SDH brings parent and teachers together through one connected platform. Access daily learning information, share classroom experiences, and strengthen the partnership that supports every student's growth.</p>
              </div>
            </section>
          </motion.div>
        </>
    )
}