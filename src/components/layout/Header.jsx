import React,{useState} from "react"
import { Link,useLocation} from "react-router-dom"
import NavLinks from "./NavLinks"
import { NAV_ITEMS,isPathActive } from "../../utils/navigation";
import {HiBars3,HiSun,HiMoon} from "react-icons/hi";
import useTheme from "../../hooks/useTheme";
import UserMenu from "./UserMenu.jsx";

export default function Header(){
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const location=useLocation();
    const isNavItemActive=(path) => isPathActive(path,location.pathname);
    return(
        <header className="navbar bg-base-100 shadow-lg">
            <div className={`navbar-start dropdown dropdown-bottom ${isMenuOpen ? 'dropdown-open' : ''}`}>
                <div className="btn btn-ghost md:hidden" onClick={() => setIsMenuOpen((open) => !open)}>
                    <HiBars3 className="w-6 h-6"/>{""}
                </div>
                {isMenuOpen && (
                    <NavLinks items={NAV_ITEMS} 
                    isActive={isNavItemActive} 
                    onItemClick={()=>setIsMenuOpen(false)} 
                    listClassName={"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box min-w-max md:hidden"}/>
                )}
            </div>
        </header>
    );
};

// export default function Header(){
//     const [isMenuOpen,setIsMenuOpen]=useState(false);
//     const location=useLocation();
//     const isNavItemActive=(path)=>isPathActive(path,location.pathname);
//     return(
//         <header className="navbar bg-base-100 shadow-lg">
//             <div className={`navbar-start dropdown dropdown-bottom ${isMenuOpen ? 'dropdown-open' : ''}`}>
//                 <div className="btn bg-ghost md:hidden" onClick={() => setIsMenuOpen((open) => !open)}>
//                     <HiBars3 className="w-6 h-6"/>{""}
//                 </div>
//                 {isMenuOpen && (
//                     <NavLinks items={NAV_ITEMS} isActive={isNavItemActive} onItemClick={()=>setIsMenuOpen(false)} listClassName={"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box min-w-max md:hidden"}/>
//                 )}
//             </div>
//         </header>
//     );
// };