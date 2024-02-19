import {useState, useEffect} from "react";

export const useScrollTop=(threshold=10)=>{
    //setting default for whether the user has scrolled or not
    const [scrolled, setScrolled]=useState(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>threshold){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
        //dependency array
    },[threshold]);
    return scrolled;
}