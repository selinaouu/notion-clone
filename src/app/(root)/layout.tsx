import { NavBar } from "./_components/navbar";
const HomePage=({
    children
}:{
    children:React.ReactNode;
})=>{
    return(
        <div className="h-full w-full dark:bg-[#1F1F1F]">
            <NavBar/>
            <main className="h-full pt-35">
                {children}
            </main>
        </div>
    );
}

export default HomePage;