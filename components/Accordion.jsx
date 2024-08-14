"use client"
import { useState } from "react";

export const Accordion = ({title, answer}) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2">
            <div className="bg-background px-8 py-12 rounded-[20px]">
                <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full  ">
                    <span className="text-primary font-mont font-bold text-xl">{title}</span>
                    {accordionOpen ?
                            <span className="text-text text-4xl font-pop font-light transition-transform duration-300 ease-in-out rotate-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        : 
                            <span className="text-text text-4xl font-pop font-light transition-transform duration-300 ease-in-out rotate-90">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        }
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}>
                    <div className="grid gap-6 overflow-hidden text-text font-pop">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}