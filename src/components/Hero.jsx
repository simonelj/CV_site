import { ChevronDown, ChevronRight} from "lucide-react";

import { handleNavClick } from "./subcomponents/navHandler";

export default function Hero()
{

    return (
        
        <section className="relative min-h-screen items-center justify-center pt-16 sm:pt-70 px-4 sm:px-6 lg:px-8 overflow-hidden"> 
            <div className=" max-w-7xl mx-auto text-center relative w-full items-center "> 
                <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
                    <div>
                        <h1 className="animate-in slide-in-from-bottom duration-700 delay-200">
                            Simone Langdal Jensen
                        </h1>
                        <span className="text-md text-gray-400 max-w-2xl mg-6 animate-in slide-in-from-bottom duration-700 delay-400 leading-relaxed">
                            A technical writer with a creative flare and technical background. 
                        </span>

                        <div className="flex flex-col items-center justify-center gap-3 m-4  animate-in slide-in-from-bottom duration-700 delay-400">
                            <button className="group w-full px-6 py-3 bg-gradient-to-b from-sky-600 to-sky-700 rounded-lg hover:scale-102 flex items-center justify-center">
                                <span>See where I've worked and studied</span>
                                <ChevronRight />
                            </button>

                            <button className="group w-full px-6 py-3 bg-gradient-to-b from-sky-600 to-sky-700 rounded-lg hover:scale-102 flex items-center justify-center">
                                <span>Get an overview of what I'm good at</span>
                                <ChevronRight />                                
                            </button>

                            <button className="group w-full px-6 py-3 bg-gradient-to-b from-sky-600 to-sky-700  rounded-lg hover:scale-102 flex items-center justify-center">
                                <span>Take a look at some of my projects</span>
                                <ChevronRight />                                
                            </button>

                            <button className="group w-full px-6 py-3 bg-gradient-to-b from-sky-600 to-sky-700  rounded-lg hover:scale-102 flex items-center justify-center">
                                <span>Contact me</span>
                                <ChevronRight />                                
                            </button>
                        </div>
                    </div>
                    
                    <div className="order-2 w-full flex items-center justify-center mx-auto">
                        <img className="rounded-full w-80 drop-shadow-xl  animate-in slide-in-from-bottom duration-700 delay-200" src="/me_at_mir.jpg" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-20">
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="group inline-block cursor-pointer">
                    <ChevronDown className="w-20 h-20 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:translate-y-2" />
                </a>
            </div>
            
        </section>
    );
}