"use client"
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type FAQItem = {
  question: string
  answer: string
}

const footerFAQS: FAQItem[] = [
  { question: 'Is My SDH available on Android and iPhone', answer: 'Yes. My SDH is available for both Android and iOS devices. ' },
  { question: 'Does My SDH require an internet connection? ', answer: 'Yes. An internet connection is required to receive the latest updates, synchronize information, and access new content.' },
  { question: 'Is My SDH free to use? ', answer: 'Yes. My SDH is provided by your school for parents and teachers.' },
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
              <span className="text-sm md:text-base text-[#1279be] font-sans">{item.question}</span>
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
                <p className="text-sm pb-4 pr-6 text-gray-600 font-sans">
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
            <section id="download" className="scroll-mt-20 justify-center items-center w-full bg-[#dde4ed] flex py-6 flex-col">
              <div className="flex flex-col items-center justify-center text-center text-black z-10">
                <h1 className="text-base md:text-3xl font-sans text-[#192553] py-2">Start Using My SDH Today!</h1>
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
                  <div className="w-1/2 text-center z-10 text-black">
                    <FAQAccordion items={footerFAQS} />
                  </div>
                </div>
              </div>       
            </section>
        </>
    )
}