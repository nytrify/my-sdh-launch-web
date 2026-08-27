"use client"
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type FAQItem = {
  question: string
  answer: string
}

const footerFAQS: FAQItem[] = [
  { question: 'Is MySDH available on Android and iPhone?', answer: 'Yes. MySDH is available for both Android and iOS devices. ' },
  { question: 'Does MySDH require an internet connection? ', answer: 'Yes. An internet connection is required to receive the latest updates, synchronize information, and access new content.' },
  { question: 'Is MySDH free to use? ', answer: 'Yes. MySDH is provided by your school for parents and teachers.' },
  { question: 'How often is information updated? ', answer: 'Information is updated whenever teachers or the school publish new content. Simply refresh the app or ensure your internet connection is active to view the latest updates.' },
  { question: 'How can I get support?', answer: 'If you need assistance, please contact your school first. Your school\'s administrator or IT support team can help with account access and technical issues. ' }
]

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
              className="w-full flex items-center justify-between py-3 text-left"
            >
              <span className="text-sm md:text-2xl text-[#0a1a4a] font-sans">{item.question}</span>
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
                <p className="text-sm md:text-lg pb-4 pr-6 text-[#0a1a4a] font-sans text-left">
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

export default function Download(){
    return(
        <>
            <section className="relative h-max w-full bg-white"> 
              <div id="download" className="relative flex flex-col items-center justify-center text-center bg-white h-max py-15">
                <div className="relative flex flex-col items-center justify-center text-center text-black z-10 w-screen">
                  <h1 className="text-base md:text-3xl font-sans text-[#192553] py-2">Start Using MySDH Today!</h1>
                  <h1 className="text-base md:text-xl font-sans text-[#192553] py-2">Compatible with Android and iOS</h1>
                  <div className="flex items-center gap-4 py-10">
                    <a href="https://apps.apple.com/id/app/mysdh/id6790746164" target="_blank">
                      <Image src="/appstore1.png" alt="App Store" width={250} height={80}/>
                    </a>
                    <a href="" target="_blank">
                      <Image src="/googleplay1.png" alt="Play Store" width={250} height={80}/>
                    </a>
                  </div>
                </div>
                {/* <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 flex justify-center items-center w-3/4">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#192553]/30 z-0" />      
                    <h2 className="text-lg uppercase tracking-wider text-[#192553] whitespace-nowrap font-sans bg-[#dde4ed] px-4 py-1 rounded-lg shadow font-bold z-10">
                      Frequently Asked Questions
                    </h2>
                </div>   */}
               </div>
                {/* <div className="relative flex flex-col items-center justify-center text-center h-max py-15 bg-white">
                  <div className="flex w-full w-full mt-12 pb-6 justify-center">
                    <div className="w-1/2 text-center z-10 text-black">
                      <FAQAccordion items={footerFAQS} />
                    </div>
                  </div>
                </div>        */}

            </section>

        </>
    )
}