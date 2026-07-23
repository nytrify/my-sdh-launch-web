"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ParentGuide from "@/components/ParentGuide"

export default function ParentGuidePage(){
    return (
        <>
          <Navbar />
          
          <main className="flex-grow pt-15">
            <ParentGuide />
            <Footer />
          </main>
        </>
        
      );
}