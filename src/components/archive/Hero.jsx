import { ArrowRight, ChevronDown, Play, Sparkle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { codeExamples } from "../data/CodeExample";
import { cardContent } from "../data/CodeExample";

export default function Hero()
{
    const[mousePosition,setMousePosition] = useState({x:0, y:0});
    const[activeTab,setActiveTab] = useState("Page 1")

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", handleMouseMove);

        return() => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const currentFloatingCard = cardContent[activeTab];
    return (
        
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"> 
            <div className="absolute inset-0 opacity-30" 
            style={{
                background:`radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246, 0.15), transparent 40%)`
            }} />

            <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />


            <div className=" max-w-7xl mx-auto text-center relative w-full"> 
                <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
                    <div>
                        <h1 className="text-5xl font-semibold mb-4 animate-in slide-in-from-bottom duration-700 delay-200 text-white">
                            Simone Langdal Jensen
                        </h1>
                        <p className="text-md text-gray-400 max-w-2xl mg-6 animate-in slide-in-from-bottom duration-700 delay-400 leading-relaxed">
                            A technical writer with a creative flare and technical background. 
                        </p>

                        <div className="flex flex-col items-center justify-center gap-3 m-4  animate-in slide-in-from-bottom duration-700 delay-400">
                            <button className="group w-full px-6 py-3 bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg hover:scale-102 flex items-center justify-center">
                                <span>Go shopping</span>
                                <ArrowRight />
                            </button>

                            <button className="group w-full px-6 py-3 bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg hover:scale-102 flex items-center justify-center">
                                <span>Play</span>
                                <ArrowRight />
                                
                            </button>
                        </div>
                    </div>
                    
                    <div className="relative order-2 w-full">
                        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                            <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[450px] lg:h-[450px] border-white/5 border">
                                {/* IDE HEADER */}
                                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                                        </div>
                                        <span className="text-xs text-gray-300">Simone's site</span>
                                    </div>
                                    <ChevronDown className="w-3 h-3 text-gray-300"/>
                                </div>
                                <div className="p-3 relative h-full">
                                {/* File tabs*/}
                                <div className="flex space-x-1 mb-3 overflow-x-auto">
                                    <button 
                                        onClick={() => setActiveTab("Page 1")}
                                        className={`px-3 py-2 backdrop-blur-sm text-xsm sm:text-sm rounded-t-lg border transition-all duration-300 whitespace-nowrap ${activeTab ==="Page 1" ? "bg-blue-500/30 text-white border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}`}>
                                        Page 1
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab("Page 2")}
                                        className={`px-3 py-2 backdrop-blur-sm text-xsm sm:text-sm rounded-t-lg border transition-all duration-300 whitespace-nowrap ${activeTab ==="Page 2" ? "bg-blue-500/30 text-white border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}`}>
                                        Page 2
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab("Page 3")}
                                        className={`px-3 py-2 backdrop-blur-sm text-xsm sm:text-sm rounded-t-lg border transition-all duration-300 whitespace-nowrap ${activeTab ==="Page 3" ? "bg-blue-500/30 text-white border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}`}>
                                        Page 3
                                    </button>
                                </div>
                                {/* Tab content */}
                                <div className="relative overflow-hidden flex-grow text-sm text-gray-300">
                                {codeExamples[activeTab]}                         
                                    
                                </div>
                            </div>
                            </div>
                            {/* Floating cards */}
                            <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 p-3 backdrop-blur-xl rounded-lg border border-white/20 shadow-xl ${cardContent[activeTab].bgColor}`}>
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="w-6 h-6 ">{currentFloatingCard.icon}</div>
                                    <span className="text-sm font-medium">{currentFloatingCard.title}</span>
                                </div>
                                <div className="text-sm text-left">
                                    {currentFloatingCard.content}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}