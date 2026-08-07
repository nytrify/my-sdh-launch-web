"use client"

import PhoneFrame from "./PhoneFrame"
import Image from "next/image";
import { ChevronDown } from 'lucide-react'
import { useState } from "react";
import { useInView } from "@/app/hooks/UseInView";
import TipsSection from "./TipsSection";
import VideoPlayer from "./VideoPlayer";

type FAQItem = {
  question: string
  answer: string
}

const parentFAQs: FAQItem[] = [
  { question: 'How do I log in to MySDH?', answer: 'Use the username and password provided by your school. Open the MySDH app, enter your account details, and tap Sign In. If you have not received your account, please contact your child\'s school.' },
  { question: 'I forgot my password. What should I do?', answer: 'Tap Forgot Password on the login page and follow the instructions to reset your password. If you are unable to reset it, please contact your school\'s administrator for assistance.' },
  { question: 'Can I view more than one child in MySDH?', answer: 'Yes. If you have more than one child enrolled in the school, all linked student accounts can be accessed from the same parent account, provided they have been connected by the school. ' },
  { question: 'Will I receive notifications?', answer: 'Yes. MySDH can send notifications for new Agenda items, Student Updates, and other important announcements. Make sure notifications are enabled in your device settings. ' },
  { question: 'Can I access MySDH on different devices?', answer: 'Yes. You may sign in using your account on another supported device. Simply download the app and log in with the same credentials. ' },
  { question: 'Is my child\'s information secure?', answer: 'Yes. MySDH is designed to protect student information. Only authorized users can access student-related content according to the permissions assigned by the school. '},
  { question: 'Why don\'t I see updates every day?', answer: 'Teachers share learning updates based on classroom activities and school schedules. The frequency of updates may vary depending on the learning program and classroom events. ' },
  { question: 'Who should I contact if I need help?', answer: 'Please contact your school\'s administrator or IT support if you experience login issues or need technical assistance.'}
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
          <div key={index} className="border-b border-gray-600">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-3 text-left font-sans"
            >
              <span className="text-sm md:text-2xl text-[#dde4ed]">{item.question}</span>
              <ChevronDown
                className={`w-4 h-4 flex-shrink-0 ml-3 transition-transform duration-300 text-white ${
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
                <p className="text-sm md:text-lg text-[#bcceeb] font-sans pb-4 pr-6">
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

export default function ParentGuide(){  

    const { ref: headingRef, isInView: headingInView } = useInView();
    const { ref: textRef, isInView: textInView } = useInView();
    
    return(
        <>
            <section className="relative min-h-screen">
              <div className="relative w-full h-[500px]">
                {/* <Image src="/reading-with-dad.jpg" alt="Parent Guide Banner" fill className="object-cover " /> */}
                <BgDecor />

                <div className="absolute inset-0 bg-[#0a1a4a]/70" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-10">
                  <h1 className="text-5xl font-bold md:text-7xl font-sans text-[#dde4ed] text-center p-2">Parent Guide</h1>
                  <p className="text-base md:text-2xl pt-4 text-[#dde4ed] font-sans text-center md:w-3/4">Welcome to MySDH, the parent application designed to help you stay connected with your child's learning journey.</p>       
                </div>

              </div>

              <div className="relative flex flex-col items-center justify-center text-center bg-[#1279be] h-max py-15">
                <div className="w-3/4 flex flex-col items-center justify-center">
                  <div ref={headingRef as React.RefObject<HTMLDivElement>} 
                      className={`flex items-center justify-center gap-4 px-10 py-2 transition-all duration-700 ease-out ${headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h1 className="text-base text-lg md:text-4xl pt-4 text-[#dde4ed] font-sans text-center md:w-3/4">Through this application, you can:</h1>
                  </div>
                  <div ref={textRef as React.RefObject<HTMLDivElement>} 
                      className={`flex items-center gap-4 px-10 py-2 text-center md:text-left transition-all duration-700 ease-out delay-150 ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <ul className="list-disc md:text-xl pl-6 text-left space-y-2 font-sans text-[#dde4ed] py-4">
                      <li>Stay informed about daily school activities.</li>
                      <li>View your child's learning updates.</li>
                      <li>Monitor upcoming assignments and reminders.</li>
                      <li>Access your child's profile.</li>
                      <li>Switch between children if you have more than one enrolled at SDH.</li>
                    </ul> 
                  </div>

                </div>
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 flex justify-center items-center w-3/4">
                  <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-bold font-sans bg-white px-4 py-1 rounded-lg shadow">
                    Getting Started
                  </h2>
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-center text-center">          

                <div className="flex flex-col items-center justify-center text-center bg-[#dde4ed] px-5 py-12 w-full">
                  <div className="w-full max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <div className="flex flex-col items-center gap-4 w-full max-w-md md:max-w-none md:flex-1">
                        <h1 className="text-2xl md:text-4xl font-bold font-sans text-[#192553]">Sign in</h1>
                        <p className="text-sm md:text-base font-sans text-[#1279be] leading-relaxed">Sign in using the account provided by your school.</p>
                        <div className="pt-2 w-full">
                          <VideoPlayer src="/sdh-logo-vid.mp4"/>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <PhoneFrame src="/SDH01384.JPG" alt="Agenda Screen"/>
                      </div>
                    </div>
                  </div>
                </div>                

                <div className="flex flex-col items-center justify-center text-center bg-[#1279be] px-5 py-12 w-full">
                  <div className="w-full max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <div className="flex flex-col items-center gap-4 w-full max-w-md md:max-w-none md:flex-1">
                        <h1 className="text-2xl md:text-4xl font-bold font-sans text-[#192553]">Forgot Password</h1>
                        <p className="text-sm md:text-base font-sans text-[#dde4ed] leading-relaxed">Reset your password securely if you are unable to access your account.</p>
                        <div className="pt-2 w-full">
                          <VideoPlayer src="/sdh-logo-vid.mp4"/>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <PhoneFrame src="/SDH01384.JPG" alt="Agenda Screen"/>
                      </div>
                    </div>
                  </div>
                </div>    

                <div className="flex flex-col items-center justify-center text-center bg-[#dde4ed] px-5 py-12 w-full">
                  <div className="w-full max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <div className="flex flex-col items-center gap-4 w-full max-w-md md:max-w-none md:flex-1">
                        <h1 className="text-2xl md:text-4xl font-bold font-sans text-[#192553]">Dashboard</h1>
                        <p className="text-sm md:text-base font-sans text-[#1279be] leading-relaxed">View all important information from one central dashboard.</p>
                        <div className="pt-2 w-full">
                          <VideoPlayer src="/sdh-logo-vid.mp4"/>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <PhoneFrame src="/SDH01384.JPG" alt="Agenda Screen"/>
                      </div>
                    </div>
                  </div>
                </div>                

                <div className="flex flex-col items-center justify-center text-center bg-[#1279be] px-5 py-12 w-full">
                  <div className="w-full max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <div className="flex flex-col items-center gap-4 w-full max-w-md md:max-w-none md:flex-1">
                        <h1 className="text-2xl md:text-4xl font-bold font-sans text-[#192553]">Academic Menu</h1>
                        <p className="text-sm md:text-base font-sans text-[#dde4ed] leading-relaxed">Learn to access the academic features, Student Agenda and Student Updates, within the application</p>
                        <div className="pt-2 w-full">
                          <VideoPlayer src="/sdh-logo-vid.mp4"/>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <PhoneFrame src="/SDH01384.JPG" alt="Agenda Screen"/>
                      </div>
                    </div>
                  </div>
                </div>                 

                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 flex justify-center items-center w-3/4">
                    <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-bold font-sans bg-white px-4 py-1 rounded-lg shadow">
                      Parents Features
                    </h2>
                  </div>        
              </div>

              <div className="flex flex-col items-center justify-center text-center text-black bg-[#dde4ed] px-5 py-12">
                <div className="w-full max-w-5xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center text-center gap-8 md:gap-12">
                    <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-md md:max-w-none md:flex-1 md:text-left">
                      <h1 className="text-2xl md:text-4xl font-bold font-sans text-[#192553]">Agenda</h1>
                      <p className="text-sm md:text-base font-sans text-[#1279be] leading-relaxed">Stay one step ahead in your child's learning journey. Agenda gives you a clear view of upcoming classroom activities, school events, and important reminders, helping you prepare, encourage, and support your child every day.</p>
                      <p className="text-sm md:text-base font-sans text-[#1279be] leading-relaxed">Whether it's a classroom activity, an assessment, or a school event, Agenda helps ensure you never miss an important moment.</p>
                      <div className="w-full pt-2">
                        <VideoPlayer src="/sdh-logo-vid.mp4"/>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <PhoneFrame src="/SDH01384.JPG" alt="Agenda Screen"/>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center text-center text-black bg-[#1279be] px-5 py-12">
                <div className="w-full max-w-5xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center text-center gap-8 md:gap-12">
                    <div className="order-2 md:order-1 flex-shrink-0">
                      <PhoneFrame src="/SDH01384.JPG" alt="Student Update Screen"/>
                    </div>
                    <div className="order-1 md:order-2 flex flex-col items-center md:items-start gap-4 w-full max-w-md md:max-w-none md:flex-1 md:text-left">
                      <h1 className="text-2xl md:text-4xl font-bold font-sans text-[#192553]">Student Update </h1>
                      <p className="text-sm md:text-base font-sans text-[#dde4ed] leading-relaxed">Celebrate every learning moment with your child. Student Update allows you to follow classroom experiences through photos and meaningful stories, giving you a closer look at what your child is learning and accomplishing each day.</p>
                      <p className="text-sm md:text-base font-sans text-[#dde4ed] leading-relaxed">It's more than just pictures—it's a window into your child's growth, creativity, and learning journey at school.</p>
                      <div className="w-full pt-2">
                        <VideoPlayer src="/sdh-logo-vid.mp4"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <TipsSection />

              <div className="relative flex flex-col items-center justify-center text-center text-black bg-[#dde4ed] py-15">
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
                  <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-sans bg-white px-4 py-1 rounded-lg shadow">
                    Frequently Asked Questions
                  </h2>
                </div>               
              </div>
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black bg-[#0a1a4a]">
                <div className="flex-col flex w-full mt-12 items-center">
                    <div className="flex w-full w-full mt-12 pb-6 justify-center">
                      <div className="w-1/2 text-center z-10 pb-5">
                        <FAQAccordion items={parentFAQs} />
                      </div>
                    </div>
                  </div>
              </div>
            </section>
        </>
    )
}