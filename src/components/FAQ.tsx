"use client"

import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

type FAQItem = {
  question: string
  answer: string
}

const parentFAQs: FAQItem[] = [
  { question: 'How do I log in to My SDH?', answer: 'Use the username and password provided by your school. Open the My SDH app, enter your account details, and tap Sign In. If you have not received your account, please contact your child\'s school.' },
  { question: 'I forgot my password. What should I do?', answer: 'Tap Forgot Password on the login page and follow the instructions to reset your password. If you are unable to reset it, please contact your school\'s administrator for assistance.' },
  { question: 'Why can\'t I see the Agenda?', answer: 'The Agenda becomes visible once your child\'s teacher publishes it for the term. Check back after the school day begins.' },
  { question: 'Why is Student Update not available?', answer: 'Student Updates are posted by teachers periodically, not on a fixed schedule. You\'ll be notified when a new one is published.' },
  { question: 'Can I access more than one child?', answer: 'Yes — contact your school to link multiple children to a single parent account, then switch between them from the app menu.' },
]

const teacherFAQs: FAQItem[] = [
  { question: 'How do I publish an Agenda?', answer: 'Go to the Agenda tab, create your entry, and tap Publish. Parents will see it immediately.' },
  { question: 'Can I edit a Student Update after publishing?', answer: 'Yes, open the update from your posts list and tap Edit. Parents will see the updated version.' },
  { question: 'What types of photos should I upload?', answer: 'Upload clear, appropriate classroom photos that don\'t include students other than those in the recipient\'s class group.' },
  { question: 'Why can\'t parent see my post?', answer: 'Double check the post is set to Published (not Draft) and that it\'s tagged to the correct class group.' },
]

export default function FAQ(){
    return(
        <>
            <section className="justify-center items-center w-full bg-[#dde4ed] flex py-6">
              <div className="flex text-black z-10">
                <div className="flex-col w-full mt-12">
                    <h1 className="text-5xl font-bold md:text-4xl font-sans text-center">Frequently Asked Questions</h1>
                    <div className="flex w-full max-w-4xl mt-12 pb-6">
                      <div className="w-1/2 text-center z-10">
                        <h1 className="text-base md:text-3xl font-sans">Parent</h1>
                        <ul className="list-disc pl-6 text-left space-y-2 font-sans">
                          <li>How do I log in?</li>
                          <li>How do I reset my password? </li>
                          <li>Why can't I see the Agenda? </li>
                          <li>Why is Student Update not available? </li>
                          <li>Can I access more than one child? </li>
                        </ul>
                      </div>
                      <div className="w-1/2 text-center z-10">
                        <h1 className="text-base md:text-3xl font-sans">Teachers</h1>
                        <ul className="list-disc pl-6 text-left space-y-2 font-sans">
                          <li>How do I publish an Agenda?</li>
                          <li>Can I edit a Student Update after publishing?  </li>
                          <li>What types of photos should I upload?  </li>
                          <li>Why can't parent see my post?  </li>
                        </ul>
                      </div>
                    </div>
                    <h1 className="text-5xl font-bold md:text-4xl font-sans text-center">Need Help?</h1>
                    <p className="text-base md:text-xl pt-6 font-sans">If you need assistance, please contact your school or our support team. </p>
                    <div className="flex w-full max-w-4xl mt-12 pb-6">
                      <div className="w-1/2 text-center">
                        <h1 className="text-base md:text-3xl font-sans">Parent Support</h1>
                        <a href="" className="flex items-center">
                          <MdEmail />
                          <p className="font-sans">IT Support</p>
                        </a>
                        <a href="" className="flex items-center">
                          <IoLogoWhatsapp />
                          <p className="font-sans">School Administrator</p>
                        </a>
                      </div>
                      <div className="w-1/2 text-center">
                        <h1 className="text-base md:text-3xl font-sans">Teachers Support</h1>
                        <a href="" className="flex items-center">
                          <MdEmail />
                          <p className="font-sans">Email Support</p>
                        </a>
                        <a href="" className="flex items-center">
                          <IoLogoWhatsapp />
                          <p className="font-sans">School Contact</p>
                        </a>
                      </div>
                    </div>
                </div>                
              </div>
            </section>
        </>
    )
}