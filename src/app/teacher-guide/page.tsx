"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeacherGuide from "@/components/TeacherGuide";

export default function TeacherGuidePage(){
    return (
        <>
          <Navbar />
          
          <main className="flex-grow pt-15">
            <TeacherGuide />
            <Footer />
          </main>
        </>
        
      );
}