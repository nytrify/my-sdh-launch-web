"use client";

import { ChevronDown } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import Image from "next/image";
import { useState } from "react";

type FAQItem = {
  question: string
  answer: string
}

const teacherFAQs: FAQItem[] = [
  { question: 'How do I log in to My SDH?', answer: 'Sign in using your Microsoft 365 school account. Select Sign in with Microsoft 365 and enter your school email address and password.' },
  { question: 'How do I publish an Agenda?', answer: 'Open the Agenda feature, create a new agenda item, add the activity title, date, time, description, and any necessary information, then publish it for parents.' },
  { question: 'Can I edit an Agenda after publishing?', answer: 'Yes. You can update Agenda information whenever necessary. Parents will always see the latest published version.' },
  { question: 'How do I create a Student Update?', answer: 'Open Student Update, upload one or more photos, write a short description highlighting the learning activity, then publish the post.' },
  { question: 'What kinds of photos should I upload?', answer: 'Share photos that highlight meaningful learning experiences, classroom engagement, projects, experiments, performances, or other educational activities. Always follow your school\'s student privacy guidelines.' },
  { question: 'Why can\'t parents see my post?', answer: 'This may happen if: 1. The post has not been published. 2. The class has not been assigned correctly. 3. The student\'s parent account has not been linked. 4. There is a temporary synchronization delay. If the issue persists, contact your school\'s administrator.'},
  { question: 'What should I do if I encounter technical issues?', answer: 'Contact your school\'s IT support or administrator. If requested, provide screenshots and a description of the issue to help resolve it more quickly.' },
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
              <span className="text-sm md:text-base text-[#dde4ed]">{item.question}</span>
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
                <p className="text-sm text-[#bcceeb] font-sans pb-4 pr-6">
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
    return(
        <>
          <section className="relative min-h-screen w-full">
              <div className="relative w-full h-screen">
                <Image src="/DSC09549.JPG" alt="Teacher Guide Banner" fill className="object-cover " />

                <div className="absolute inset-0 bg-[#0a1a4a]/70" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-10">
                  <h1 className="text-5xl font-bold md:text-7xl font-sans text-[#1279be] text-center p-2">Teacher Guide</h1>
                  <h1 className="text-base md:text-4xl text-center font-sans text-[#dde4ed] text-center">Welcome to My SDH for Teachers</h1>
                  <p className="text-base md:text-2xl pt-4 text-[#dde4ed] font-sans text-center md:w-3/4">My SDH enables teachers to communicate learning experiences with parents through simple and meaningful updates. </p>           
                </div>

                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 flex justify-center items-center w-3/4">
                    <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-bold font-sans bg-white px-4 py-1 rounded-lg shadow">
                      Getting Started
                    </h2>
                  </div>
              </div>
              {/* <div className="relative flex flex-col items-center justify-center bg-[#dde4ed]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-3/4 mt-12">
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="flex-1 text-center md:text-left px-5">
                      <h1 className="text-base md:text-3xl font-sans text-[#192553]">Login</h1>
                      <p className="text-base py-4 text-[#1279be] font-sans">Access My SDH using your school account.</p>
                    </div>
                    <div className="flex-shrink-0 px-5">
                      <PhoneFrame src="/SDH01384.JPG" alt="Login Screen"/>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="flex-shrink-0 px-5 order-2 md:order-1">
                      <PhoneFrame src="/SDH01384.JPG" alt="Dashboard Screen" />
                    </div>
                    <div className="flex-1 text-center md:text-left px-5 order-1 md:order-2">
                      <h1 className="text-base md:text-3xl text-center md:text-left font-sans text-[#192553]">Dashboard</h1>
                      <p className="text-base pt-4 font-sans text-[#1279be] py-4">Manage your classroom information from one dashboard. </p>
                    </div>
                  </div>
                </div>  
                <div className="flex flex-col items-center text-center p-10">
                  <div className="flex-1 text-center justify-center md:text-left px-5">
                    <h1 className="text-base md:text-3xl font-sans text-[#192553] text-center">Navigation</h1>
                    <p className="text-base pt-4 font-sans text-[#1279be] py-4 text-center md:text-right">Learn where to find each feature. </p>    
                  </div>  
                  <div className="flex-shrink-0 px-5">
                    <PhoneFrame src="/SDH01384.JPG" alt="Navigation Screen" />
                  </div>             
                </div>              
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 flex justify-center items-center w-3/4">
                  <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-sans bg-white px-4 py-1 rounded-lg shadow">
                    Teacher Features
                  </h2>
                </div>  
              </div> */}
              <div className="relative flex flex-col items-center justify-center text-center py-15 bg-[image:linear-gradient(180deg,#dde4ed_0%,#dde4ed_50%,#1279be_50%)]">          
                <div className="w-1/2 pb-15">
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="flex-1 text-center md:text-right">
                      <h1 className="text-base md:text-4xl font-bold font-sans text-[#192553]">Login</h1>
                      <p className="text-base py-4 text-[#1279be] font-sans">Access My SDH using your school account.</p>
                    </div>
                    <div className="flex-shrink-0 p-10 md:pb-5">
                      <PhoneFrame src="/SDH01384.JPG" alt="Agenda Screen"/>
                    </div>
                  </div>
                </div> 

                <div className="w-1/2 pb-15">
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="order-2 md:order-1 flex-shrink-0 p-10 md:pb-5">
                      <PhoneFrame src="/SDH01384.JPG" alt="Agenda Screen"/>
                    </div>
                    <div className="order-1 md:order-2 flex-1 text-center md:text-left">
                      <h1 className="text-base md:text-4xl font-bold font-sans text-[#192553]">Dashboard</h1>
                      <p className="text-base py-4 text-[#dde4ed_25] font-sans">Manage your classroom information from one dashboard.</p>
                    </div>
                  </div>
                </div>                      

                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 flex justify-center items-center w-3/4">
                  <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-bold font-sans bg-white px-4 py-1 rounded-lg shadow">
                    Teachers Features
                  </h2>
                </div>        
              </div> 


              <div className="inset-0 flex flex-col items-center justify-center text-center bg-[#dde4ed]">
                <div className="gap-12 w-3/4 mt-12 md:py-10">
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="flex-1 text-center md:text-left px-5">
                      <h1 className="text-base md:text-4xl font-bold text-center font-sans text-[#0a1a4a]">Agenda</h1>
                      <p className="text-base pt-4 font-sans text-center md:text-left text-[#1279be]">Agenda enables teachers to share upcoming classroom activities, learning plans, and school events, helping families prepare and actively support their children's learning. </p>
                      <ul className="list-disc pl-6 text-left space-y-2 font-sans text-[#1279be] py-4">
                        <li>Use clear and descriptive titles.</li>
                        <li>Include dates and times.</li>
                        <li>Provide any preparation or materials needed.</li>
                        <li>Keep information concise and easy to understand.</li>
                      </ul>
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
                    <div className="flex-shrink-0 p-10 md:pb-5">
                      <PhoneFrame src="/SDH01384.JPG" alt="Agenda Screen"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inset-0 flex flex-col items-center justify-center text-center bg-[#1279be]">
                <div className="gap-12 w-3/4 mt-12 md:py-5">
                  <div className="flex flex-col md:flex-row items-center text-center">
                    <div className="order-2 md:order-1 flex-shrink-0 p-10 md:pb-5">
                      <PhoneFrame src="/SDH01384.JPG" alt="Student Update Screen"/>
                    </div>
                    <div className="order-1 md:order-2 flex-1 text-center md:text-left px-5">
                      <h1 className="text-base md:text-4xl font-bold text-center font-sans text-[#192553]">Student Update </h1>
                      <p className="text-base pt-4 font-sans text-center md:text-left text-[#dde4ed]">Bring learning to life beyond the classroom. Student Update enables teachers to share authentic learning moments through photos and reflections, helping parents better understand and celebrate their child's growth.</p>
                      <ul className="list-disc pl-6 text-left space-y-2 font-sans text-[#dde4ed] py-4">
                        <li>Capture authentic learning moments.</li>
                        <li>Write clear and positive descriptions.</li>
                        <li>Highlight learning objectives and achievements.</li>
                        <li>Follow school guidelines for student privacy.</li>
                      </ul>                        
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
         
              <div className="relative flex flex-col items-center justify-center text-center text-black bg-[#dde4ed] py-15">
                <div className="flex flex-col items-center justify-center text-center text-black z-10 w-3/4">
                  <h1 className="text-base md:text-2xl font-sans text-[#0a1a4a] py-2">Download My SDH today and stay informed about your child's learning journey, classroom activities, and important school updates—all in one place.</h1>
                  <h1 className="text-base md:text-xl font-sans text-[#0a1a4a] py-2">Compatible with Android and iOS</h1>
                  <div className="flex items-center gap-4 py-10">
                    <a href="">
                      <Image src="/appstore.jpg" alt="App Store" width={250} height={80}/>
                    </a>
                    <a href="">
                      <Image src="/googleplay.jpg" alt="Play Store" width={250} height={80}/>
                    </a>
                  </div>
                </div>
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 flex justify-center items-center w-3/4">
                    <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-bold font-sans bg-white px-4 py-1 rounded-lg shadow">
                      Frequently Asked Questions
                    </h2>
                  </div>               
                </div>
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black bg-[#0a1a4a]">
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