"use client";

import { ChevronDown } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import Image from "next/image";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

type FAQItem = {
  question: string
  answer: string
}

const teacherFAQs: FAQItem[] = [
  { question: 'How do I log in to MySDH?', answer: 'Sign in using your Microsoft 365 school account. Select Sign in with Microsoft 365 and enter your school email address and password.' },
  { question: 'How do I publish an Agenda?', answer: 'Open the Agenda feature, create a new agenda item, add the activity title, date, time, description, and any necessary information, then publish it for parents.' },
  { question: 'Can I edit an Agenda after publishing?', answer: 'Yes. You can update Agenda information whenever necessary. Parents will always see the latest published version.' },
  { question: 'How do I create a Student Update?', answer: 'Open Student Update, upload one or more photos, write a short description highlighting the learning activity, then publish the post.' },
  { question: 'What kinds of photos should I upload?', answer: 'Share photos that highlight meaningful learning experiences, classroom engagement, projects, experiments, performances, or other educational activities. Always follow your school\'s student privacy guidelines.' },
  { question: 'Why can\'t parents see my post?', answer: 'This may happen if: 1. The post has not been published. 2. The class has not been assigned correctly. 3. The student\'s parent account has not been linked. 4. There is a temporary synchronization delay. If the issue persists, contact your school\'s administrator.'},
  { question: 'What should I do if I encounter technical issues?', answer: 'Contact your school\'s IT support or administrator. If requested, provide screenshots and a description of the issue to help resolve it more quickly.' },
]

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

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2 text-center">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-3 text-left font-sans"
            >
              <span className="text-sm md:text-2xl text-[#0a1a4a]">{item.question}</span>
              <ChevronDown
                className={`w-4 h-4 flex-shrink-0 ml-3 transition-transform duration-300 text-[#0a1a4a] ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm md:text-lg text-[#1940b5] font-sans pb-4 pr-6 text-left">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function TeacherGuide(){
    const [isRevealed, setIsRevealed] = useState(false);
    return(
        <>
          <section className="relative min-h-screen w-full">
              <div className="relative w-full h-[500px]">
                <BgDecor />
                {/* <Image src="/DSC09549.jpg" alt="Teacher Guide Banner" fill className="object-cover " /> */}

                <div className="absolute inset-0 bg-[#0a1a4a]/70" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-10">
                  <h1 className="text-5xl font-bold md:text-7xl font-sans text-[#dde4ed] text-center p-2">Teacher Guide</h1>
                  <p className="text-base md:text-2xl pt-4 text-[#dde4ed] font-sans text-center md:w-3/4">MySDH enables teachers to communicate learning experiences with parents through simple and meaningful updates. </p>           
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-center text-center bg-white py-10">          
                <div className="w-1/2 py-8 items-center">
                  {!isRevealed ? (
                    <>
                    <div className="flex flex-col gap-8 items-center">
                      <h1 className="text-2xl text-base md:text-4xl font-bold font-sans text-[#192553]">Access The Teacher Guideline</h1>
                      <h1
                        onClick={() => setIsRevealed(true)}
                        className="w-[150px] text-lg font-bold font-sans rounded-lg border border-[#dde4ed] text-[#192553] transition hover:scale-125 text-center z-10 p-2 cursor-pointer"
                      >
                        Click Here
                      </h1>
                    </div>
                    </>
                  ) : (
                    <div className="z-10 text-center transition-opacity duration-700 ease-in-out opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.3s_forwards]">
                      <a href="https://ypph.sharepoint.com/sites/EDUTECHSDH-SLH673/SitePages/MySDH-Teacher's-Guide.aspx" target="_blank" rel="noopener noreferrer">
                        <h2 className="text-xl md:text-4xl font-bold font-sans mb-4 underline text-[#192553]">Teacher Guideline Sharepoint</h2>
                      </a>
                      
                      <button
                        onClick={() => setIsRevealed(false)}
                        className="mt-6 font-sans rounded border border-[#192553] px-4 py-2 text-sm text-[#192553] hover:bg-[#dde4ed] hover:text-[#192553] transition"
                      >
                        Back
                      </button>
                    </div>
                  )}
                </div>    
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 flex justify-center items-center w-3/4">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#192553]/30 z-0" />                  
                </div>   
              </div> 
         
              <div className="relative flex flex-col items-center justify-center text-center text-black bg-white py-15">
                <div className="flex flex-col items-center justify-center text-center text-black z-10 w-3/4">
                  <h1 className="text-base md:text-2xl font-sans text-[#0a1a4a] py-2">Download MySDH today and stay informed about your child's learning journey, classroom activities, and important school updates—all in one place.</h1>
                  <h1 className="text-base md:text-xl font-sans text-[#0a1a4a] py-2">Compatible with Android and iOS</h1>
                  <div className="flex items-center gap-4 py-10">
                    <a href="">
                      <Image src="/appstore1.png" alt="App Store" width={250} height={80}/>
                    </a>
                    <a href="">
                      <Image src="/googleplay1.png" alt="Play Store" width={250} height={80}/>
                    </a>
                  </div>
                </div>   
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 flex justify-center items-center w-3/4">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#192553]/30 z-0" />                  
                  <h2 className="relative z-10 text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-bold font-sans bg-[#dde4ed] px-4 py-1 rounded-lg shadow">
                    Frequently Asked Questions
                  </h2>
                </div>          
              </div>
              
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black bg-white">
                <div className="flex-col flex w-full mt-12 items-center">
                    <div className="flex w-full w-full mt-12 pb-6 justify-center">
                      <div className="w-1/2 text-center z-10 pb-5">
                        <FAQAccordion items={teacherFAQs} />
                      </div>
                    </div>
                  </div>
              </div>
            </section>          
        </>
    )
}