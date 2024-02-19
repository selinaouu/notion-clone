"use client";
import Image from "next/image";

import { useScrollTop } from "../../../../hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

export const NavBar=()=>{
    const scrolled=useScrollTop();
    return(
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <div className="relative w-[40px] h-[40px]">
                <Image
                    src="/notion.png"
                    fill
                    className="object-contain"
                    alt="logo"
                />
            </div>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <ModeToggle/>
            </div>
            
        </div>
    );
}