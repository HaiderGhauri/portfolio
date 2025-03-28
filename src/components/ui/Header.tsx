import MobileNavbar from "./Mobile-Navbar";
import Navbar from "./Navbar";


const Header = () => {
    return ( 
        <div className="h-[60px] max-w-5xl mx-auto grid grid-cols-2 items-center justify-items-between px-6 md:px-8 rounded-full shadow-2xl bg-slate-900/95 bg-blend-darken border border-slate-700">
            <div>
                <h1 className="text-xl font-bold">HaiderGhauri</h1>
            </div>

            <div className="flex justify-end">
                <Navbar />
                <MobileNavbar />
            </div>
        </div>
     );
}
 
export default Header;