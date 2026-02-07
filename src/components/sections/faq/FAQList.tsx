"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQItemMotion, FAQAnswerMotion } from "./FAQWrappers";

export const FAQList = ({ faqs }: { faqs: { question: string, answer: string }[] }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="divide-y divide-primary/5 border-t border-b border-primary/5">
            {faqs.map((faq, index) => (
                <FAQItemMotion key={index} index={index}>
                    <div className={activeIndex === index ? "" : "hover:bg-primary/[0.02]"}>
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-start justify-between text-left focus:outline-none gap-6 py-8"
                        >
                            <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 pr-4 leading-tight text-balance ${activeIndex === index ? "text-primary" : "text-primary/70 group-hover:text-primary"
                                }`}>
                                {faq.question}
                            </span>
                            <div className={`shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${activeIndex === index ? "text-accent rotate-180" : "text-primary/30 group-hover:text-primary"
                                }`}>
                                {activeIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                            </div>
                        </button>

                        <FAQAnswerMotion isExpanded={activeIndex === index}>
                            <div className="pb-8 pr-12">
                                <p className="text-lg text-primary/60 leading-relaxed text-balance font-medium">
                                    {faq.answer}
                                </p>
                            </div>
                        </FAQAnswerMotion>
                    </div>
                </FAQItemMotion>
            ))}
        </div>
    );
};
