import logo from "../assets/react.svg";
import searchIcon from "../assets/icons-search.svg";
import menuIcon from "../assets/icons-menu.svg";
import phoneIcon from "../assets/phone.svg";
import { useState } from "react";
import { cn } from "../utils/cn";
import { useLocation } from "react-router";
import { Link } from "./ui/link";
import { Button } from "./ui/button";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
function Navbar() {
   const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
   const location = useLocation();

   const buttons = [
      { name: "Batteries", onclick: () => {}, path: "/batteries" },
      { name: "UPS", onclick: () => {}, path: "/ups" },
      { name: "Inverters", onclick: () => {}, path: "/inverters" },
      { name: "AVR", onclick: () => {}, path: "/avr" },
   ];

   return (
      <header className="sticky top-0 z-10 flex flex-col gap-4 items-center text-black py-6 px-8 bg-white md:px-32 drop-shadow-md">
         {/* Top Section */}
         <div className="flex flex-row items-center gap-3 justify-between w-full">
            <Link to="/">
               <img
                  src={logo}
                  alt="logo"
                  className="hover:scale-105 transition-all duration-300"
               />
            </Link>
            <div>
               <h1 className="text-3xl font-bold text-blue-600">ENERGICA</h1>
            </div>
            <div className="flex flex-row items-center gap-3">
               <img className="w-6" src={phoneIcon} alt="phone-icon" />
               <p className="text-gray-700">01012731091</p>
            </div>
         </div>

         {/* Middle Section */}
         <div className="flex flex-row items-center justify-between w-full">
            {/* Mobile toggle */}
            <button
               onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
               aria-expanded={isNavMenuOpen}
               aria-label="Toggle navigation menu"
               className="cursor-pointer w-8 "
            >
               {isNavMenuOpen ? <FaXmark size={30} /> : <FaBars size={30} />}
            </button>

            {/* Search Bar */}
            <div className="relative flex items-center justify-center gap-3">
               <img
                  src={searchIcon}
                  alt="search"
                  className="absolute left-3 w-5"
               />
               <input
                  type="text"
                  placeholder="Search..."
                  className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500 w-96"
               />
            </div>
         </div>

         {/* Bottom Section - Navigation Buttons */}
         <div
            className={`flex flex-row items-center gap-4 justify-center w-full`}
         >
            {buttons.map((btn) => (
               <Link to={btn.path} key={btn.name}>
                  <Button
                     className={cn(
                        "px-4 py-2 rounded-md hover:bg-blue-50 hover:scale-110 transition-all transition-colors duration-300",
                        location.pathname === btn.path ? "bg-blue-100" : "",
                        "cursor-pointer"
                     )}
                  >
                     {btn.name}
                  </Button>
               </Link>
            ))}
         </div>
      </header>
   );
}

export default Navbar;
