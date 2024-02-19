import Image from "next/image";
import {Heading} from "./_components/heading";

const HomePage=()=> {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center 
      d:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading/>
        <div className="flex flex-col items-center justify-center max-w-5xl">
          <div className="flex items-center">
            <div className="relative w-[300px] h-[150px]">
              <Image 
              src="/notion_inspired.png"
              fill
              className="object-contain"
              alt="Notion Inspired"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default HomePage;
