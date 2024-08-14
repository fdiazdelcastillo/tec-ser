"use client"
import { useState } from "react";

export const Accordion = ({title, answer}) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2">
            <div className="bg-background px-8 py-12 rounded-[20px]">
                <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full items-center gap-4">
                    <span className="text-primary font-mont font-bold text-xl">{title}</span>
                    <span className="min-w-[16px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                            className="fill-text"
                        >
                            <rect y="7" width="16" height="2" rx="1"
                                className={`transition duration-300 origin-center ease-in-out text-text min-w-[16px] ${accordionOpen && "!rotate-180"}`}
                            />
                            <rect y="7" width="16" height="2" rx="1"
                                className={`transition duration-300 origin-center ease-in-out rotate-90 min-w-[16px] ${accordionOpen && "!rotate-180"}`}
                            />
                        </svg>
                    </span>
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