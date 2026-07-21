"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Faq({ onEnquireClick }) {
    const [activeTab, setActiveTab] = useState("course");
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = {
        course: [
            {
                question: "What types of corporate training programs does Accredian offer?",
                answer: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech."
            },
            {
                question: "What domain specializations are available?",
                answer: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI."
            },
        ],
        delivery: [
            {
                question: "Can the courses be customized for specific industries or teams?",
                answer: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization's goals."
            },
            {
                question: "Who are the instructors for these programs?",
                answer: "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights."
            },
            {
                question: "What formats are the programs delivered in?",
                answer: "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements."
            }
        ],
        miscellaneous: [
            {
                question: "What is the ideal team size for corporate training?",
                answer: "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts."
            },
            {
                question: "How do we get started with Accredian?",
                answer: "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs."
            }
        ]
    };

    const currentQuestions = faqData[activeTab];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setOpenIndex(null);
    };

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="w-full bg-white py-12 md:py-20 scroll-mt-20">
            <div className="max-w-[1250px] mx-auto px-6 lg:px-12">
                
                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-semibold text-black tracking-tight">
                        Frequently Asked <span className="text-[#2563eb]">Questions</span>
                    </h2>
                </div>

                {/* Main Layout Container*/}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    
                    {/* Category Buttons */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <button
                            onClick={() => handleTabChange("course")}
                            className={`w-full text-left px-6 py-4 rounded-xl border text-[16px] font-semibold transition-all duration-200 ${
                                activeTab === "course"
                                    ? "border-gray-200 text-[#2563eb] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                                    : "border-gray-200 text-gray-600 bg-white hover:border-gray-300"
                            }`}
                        >
                            About the Course
                        </button>
                        <button
                            onClick={() => handleTabChange("delivery")}
                            className={`w-full text-left px-6 py-4 rounded-xl border text-[16px] font-semibold transition-all duration-200 ${
                                activeTab === "delivery"
                                    ? "border-gray-200 text-[#2563eb] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                                    : "border-gray-200 text-gray-600 bg-white hover:border-gray-300"
                            }`}
                        >
                            About the Delivery
                        </button>
                        <button
                            onClick={() => handleTabChange("miscellaneous")}
                            className={`w-full text-left px-6 py-4 rounded-xl border text-[16px] font-semibold transition-all duration-200 ${
                                activeTab === "miscellaneous"
                                    ? "border-gray-200 text-[#2563eb] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                                    : "border-gray-200 text-gray-600 bg-white hover:border-gray-300"
                            }`}
                        >
                            Miscellaneous
                        </button>
                    </div>

                    {/* Accordion Questions */}
                    <div className="lg:col-span-8 flex flex-col">
                        <div className="flex flex-col divide-y divide-gray-100">
                            {currentQuestions.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div key={index} className="py-6 first:pt-0 last:pb-0">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex items-center justify-between text-left group focus:outline-none"
                                        >
                                            <span className={`text-[17px] font-bold transition-colors ${
                                                isOpen ? "text-[#2563eb]" : "text-gray-900 group-hover:text-[#2563eb]"
                                            }`}>
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ml-4 shrink-0 ${
                                                    isOpen ? "transform rotate-180 text-[#2563eb]" : ""
                                                }`}
                                            />
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                                                isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="text-gray-600 text-[15px] leading-relaxed pr-6">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* Bottom Enquire Now Button*/}
                <div className="flex justify-center mt-16 md:mt-20">
                    <Button variant="primary" onClick={onEnquireClick}>
                        Enquire Now
                    </Button>
                </div>

            </div>
        </section>
    );
}