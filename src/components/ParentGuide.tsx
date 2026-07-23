"use client"

import PhoneFrame from "./PhoneFrame"
import Image from "next/image";
import { ChevronDown } from 'lucide-react'
import { useState } from "react";

type FAQItem = {
  question: string
  answer: string
}

const parentFAQs: FAQItem[] = [
  { question: 'How do I log in to My SDH?', answer: 'Use the username and password provided by your school. Open the My SDH app, enter your account details, and tap Sign In. If you have not received your account, please contact your child\'s school.' },
  { question: 'I forgot my password. What should I do?', answer: 'Tap Forgot Password on the login page and follow the instructions to reset your password. If you are unable to reset it, please contact your school\'s administrator for assistance.' },
  { question: 'Can I view more than one child in My SDH?', answer: 'Yes. If you have more than one child enrolled in the school, all linked student accounts can be accessed from the same parent account, provided they have been connected by the school. ' },
  { question: 'Will I receive notifications?', answer: 'Yes. My SDH can send notifications for new Agenda items, Student Updates, and other important announcements. Make sure notifications are enabled in your device settings. ' },
  { question: 'Can I access My SDH on different devices?', answer: 'Yes. You may sign in using your account on another supported device. Simply download the app and log in with the same credentials. ' },
  { question: 'Is my child\'s information secure?', answer: 'Yes. My SDH is designed to protect student information. Only authorized users can access student-related content according to the permissions assigned by the school. '},
  { question: 'Why don\'t I see updates every day?', answer: 'Teachers share learning updates based on classroom activities and school schedules. The frequency of updates may vary depending on the learning program and classroom events. ' },
  { question: 'Who should I contact if I need help?', answer: 'Please contact your school\'s administrator or IT support if you experience login issues or need technical assistance.'}
]

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
              <span className="text-sm md:text-base text-[#1279be]">{item.question}</span>
              <ChevronDown
                className={`w-4 h-4 flex-shrink-0 ml-3 transition-transform duration-300 ${
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
                <p className="text-sm text-gray-600 font-sans pb-4 pr-6">
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
    return(
        <>
            <section className="relative min-h-screen w-full bg-[#FFFFED]">
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black">
                <div className="flex flex-col md:flex-row w-3/4 mt-12">
                  <div className="w-full md:w-1/2 md:h-64 group relative pt-8 md:pt-20">
                    <h1 className="text-5xl font-bold md:text-4xl font-sans text-[#192553] text-center md:text-left">Parent Guide</h1>
                    <h1 className="text-base md:text-3xl text-center font-sans text-[#192553] text-center md:text-left">Welcome to My SDH </h1>
                    <p className="text-base pt-4 text-[#1279be] font-sans text-center md:text-left md:w-3/4">My SDH helps parent stay closely connected with their child's learning journey by bringing classroom updates, learning activities, and school communication together in one convenient place. </p>                                     
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden group relative">
                    <Image src="/reading-with-dad.jpg" alt="Parent Guide" fill className="object-cover border-4 border-white border-r-0 rounded-l-xl shadow-2xl" />                
                  </div>                  
                </div>
                <div className="flex items-center w-3/4 my-8">
                  <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-sans">
                    Getting Started
                  </h2>
                  <div className="flex-1 h-px bg-black ml-6"></div>
                </div>
              </div>
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-3/4 mt-12">
                  {/* Login */}
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="flex-1 text-center md:text-left px-5">
                      <h1 className="text-base md:text-3xl font-sans text-[#192553]">Login</h1>
                      <p className="text-base py-4 text-[#1279be] font-sans">Sign in using the account provided by your school.</p>
                    </div>
                    <div className="flex-shrink-0 px-5">
                      <PhoneFrame src="/SDH01384.JPG" alt="Login Screen"/>
                    </div>
                  </div>
                  {/* Forgot Password */}
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="order-2 md:order-1 flex-shrink-0 px-5">
                      <PhoneFrame src="/SDH01384.JPG" alt="Forgot Password Screen" />
                    </div>
                    <div className="order-1 md:order-2 flex-1 text-center md:text-left px-5">
                      <h1 className="text-base md:text-3xl text-center font-sans text-[#192553] md:text-right">Forgot Password</h1>
                      <p className="text-base py-4 font-sans text-[#1279be] text-center md:text-right">Reset your password securely if you are unable to access your account.</p> 
                    </div>            
                  </div>
                  {/* Dashboard */}
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="flex-1 text-center md:text-left px-5">
                      <h1 className="text-base md:text-3xl text-center md:text-left font-sans text-[#192553]">Dashboard</h1>
                      <p className="text-base pt-4 font-sans text-[#1279be] py-4">View all important information from one central dashboard. </p>
                    </div>
                    <div className="flex-shrink-0 px-5">
                      <PhoneFrame src="/SDH01384.JPG" alt="Dashboard Screen" />
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="order-2 md:order-1 flex-shrink-0 px-5">
                      <PhoneFrame src="/SDH01384.JPG" alt="Navigation Screen" />
                    </div>
                    <div className="order-1 md:order-2 flex-1 text-center md:text-left px-5">
                      <h1 className="text-base md:text-3xl font-sans text-[#192553] text-center md:text-right">Navigation</h1>
                      <p className="text-base pt-4 font-sans text-[#1279be] py-4 text-center md:text-right">Learn how to access each feature within the application. </p>    
                    </div>               
                  </div>

                </div>
                <div className="flex items-center w-3/4 my-8">
                  <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-sans">
                    Parent Features
                  </h2>
                  <div className="flex-1 h-px bg-black ml-6"></div>
                </div>            
              </div>
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black">
                <div className="gap-12 w-3/4 mt-12 py-10">
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="flex-1 text-center md:text-left px-5">
                      <h1 className="text-base md:text-3xl text-center font-sans text-[#192553]">Agenda</h1>
                      <p className="text-base pt-4 font-sans text-left text-[#1279be]">Stay one step ahead in your child's learning journey. Agenda gives you a clear view of upcoming classroom activities, school events, and important reminders, helping you prepare, encourage, and support your child every day.</p>
                      <p className="text-base pt-4 font-sans text-left text-[#1279be]">Whether it's a classroom activity, an assessment, or a school event, Agenda helps ensure you never miss an important moment.</p>
                      <div className="pt-5">
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
                    <div className="flex-shrink-0 p-10">
                      <PhoneFrame src="/SDH01384.JPG" alt="Agenda Screen"/>
                    </div>
                  </div>
                </div>
                <div className="gap-12 w-3/4 mt-12 py-5">
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="order-2 md:order-1 flex-shrink-0 p-10">
                      <PhoneFrame src="/SDH01384.JPG" alt="Student Update Screen"/>
                    </div>
                    <div className="order-1 md:order-2 flex-1 text-center md:text-left px-5">
                      <h1 className="text-base md:text-3xl text-center font-sans text-[#192553]">Student Update </h1>
                      <p className="text-base pt-4 font-sans text-left text-[#1279be]">Celebrate every learning moment with your child. Student Update allows you to follow classroom experiences through photos and meaningful stories, giving you a closer look at what your child is learning and accomplishing each day.</p>
                      <p className="text-base pt-4 font-sans text-left text-[#1279be]">It's more than just pictures—it's a window into your child's growth, creativity, and learning journey at school.</p>
                      <div className="pt-5">
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
                  </div>
                </div>
              </div>
              {/* <div className="inset-0 flex flex-col items-center justify-center text-center text-black">
                <div className="flex w-3/4 mt-12">
                  <div className="w-1/2">
                    <h1 className="text-base md:text-3xl text-center font-sans text-[#192553]">Agenda</h1>
                    <p className="text-base pt-4 font-sans text-left text-[#1279be]">Celebrate every learning moment with your child. Student Update allows you to follow classroom experiences through photos and meaningful stories, giving you a closer look at what your child is learning and accomplishing each day.</p>
                    <p className="text-base pt-4 font-sans text-left text-[#1279be]">Whether it's a classroom activity, an assessment, or a school event, Agenda helps ensure you never miss an important moment.</p>
                    <div className="pt-5">
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
                  <div className="w-1/2 pt-5">
                    <PhoneFrame src="/SDH01384.JPG" alt="Agenda Screen"/>
                  </div>
                </div>
                <div className="flex w-3/4 mt-12">
                  <div className="w-1/2 pt-5">
                    <PhoneFrame src="/SDH01384.JPG" alt="Student Update Screen"/>
                  </div>
                  <div className="w-1/2 overflow-hidden">
                    <h1 className="text-base md:text-3xl text-center font-sans text-[#192553]">Student Update </h1>
                    <p className="text-base pt-4 font-sans text-left text-[#1279be]">Celebrate every learning moment with your child. Student Update allows you to follow classroom experiences through photos and meaningful stories, giving you a closer look at what your child is learning and accomplishing each day.</p>
                    <p className="text-base pt-4 font-sans text-left text-[#1279be]">It's more than just pictures—it's a window into your child's growth, creativity, and learning journey at school.</p>
                    <div className="pt-5">
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
                </div>   
                <div className="w-3/4 h-px bg-black my-8"></div>                           
              </div> */}
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black">
                <div className="flex-col flex w-full mt-12 items-center">
                  <div className="flex items-center w-3/4 my-8">
                    <div className="flex-1 h-px bg-black ml-6"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center text-black z-10 w-3/4">
                  <h1 className="text-base md:text-2xl font-sans text-[#192553] py-2">Download My SDH today and stay informed about your child's learning journey, classroom activities, and important school updates—all in one place.</h1>
                  <h1 className="text-base md:text-xl font-sans text-[#192553] py-2">Compatible with Android and iOS</h1>
                  <div className="flex items-center gap-4 py-10">
                    <a href="">
                      <Image src="/appstore.jpg" alt="App Store" width={250} height={80}/>
                    </a>
                    <a href="">
                      <Image src="/googleplay.jpg" alt="Play Store" width={250} height={80}/>
                    </a>
                  </div>
                </div>                
                <div className="flex-col flex w-full mt-12 items-center">
                  <div className="flex items-center w-3/4 my-8">
                    <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-sans">
                      Frequently asked questions
                    </h2>
                    <div className="flex-1 h-px bg-black ml-6"></div>
                  </div>
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