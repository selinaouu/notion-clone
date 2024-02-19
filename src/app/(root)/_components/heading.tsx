"use client";
import { ArrowRight } from "lucide-react";

export const Heading=()=>{
    return(
        <div className="max-w-3xl space-y-4"> 
            <h1 className="text-3xl">
                Motion: Notion but better. Join <span 
                className="underline font-bold"> Motion</span> now
            </h1>
            <h3 className="text-base sm:text-xl">
                Where better, faster work happens.
            </h3>
            <button className="text-white bg-black dark:bg-white dark:text-black hover:bg-gray-900 
            focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                 Enter Motion  <ArrowRight/>
            </button>
        </div>
    )
}