import { Menu, X } from "lucide-react";
import { useState } from "react";
import { handleNavClick } from "./subcomponents/navHandler";

export default function Navbar()
{
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    return (
    <nav className="fixed top-0 w-full z-50 transition-all duraction-300 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">   
                <div className="flex items-center space-x-1 group cursor-pointer">
    
                    <span className="text-lg sm:text-xl md:text-2xl font-medium bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text block text-transparent"> 
                        Simone Langdal Jensen
                    </span>
                </div>
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-300 hover:text-white text-sm lg:text-base">About</a>

                    <a href="#workExperience" onClick={(e) => handleNavClick(e, 'workExperience')} className="text-gray-300 hover:text-white text-sm lg:text-base">Work experience</a>

                    <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="text-gray-300 hover:text-white text-sm lg:text-base">Education</a>

                    <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-gray-300 hover:text-white text-sm lg:text-base">Skills</a>

                    {/*<a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-gray-300 hover:text-white text-sm lg:text-base">Projects</a>*/}

                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-300 hover:text-white text-sm lg:text-base">Contact</a>
                </div>
                <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                    {mobileMenuIsOpen ? ( <X />):(<Menu className="w-5 h-5 sm:w-6 sm:h-6" />)}
                </button>
            </div>
        </div>

        {mobileMenuIsOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-leg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                    <a href="#about" className="block text-gray-300 hover:text-white text-sm lg:text-base" onClick={(e) => { setMobileMenuIsOpen(false); handleNavClick(e, 'about') }}>About</a>

                    <a href="#workExperience" className="block text-gray-300 hover:text-white text-sm lg:text-base" onClick={(e) => { setMobileMenuIsOpen(false); handleNavClick(e, 'workExperience') }}>Work experience</a>

                    <a href="#education" className="block text-gray-300 hover:text-white text-sm lg:text-base" onClick={(e) => { setMobileMenuIsOpen(false); handleNavClick(e, 'education') }}>Education</a>

                    <a href="#skills" className="block text-gray-300 hover:text-white text-sm lg:text-base" onClick={(e) => { setMobileMenuIsOpen(false); handleNavClick(e, 'skills') }}>Skills</a>

                   {/* <a href="#projects" className="block text-gray-300 hover:text-white text-sm lg:text-base" onClick={(e) => { setMobileMenuIsOpen(false); handleNavClick(e, 'projects') }}>Projects</a>
*/}
                    <a href="#contact" className="block text-gray-300 hover:text-white text-sm lg:text-base" onClick={(e) => { setMobileMenuIsOpen(false); handleNavClick(e, 'contact') }}>Contact</a>
                </div>
            </div>
        )}
    </nav>
    )
}
