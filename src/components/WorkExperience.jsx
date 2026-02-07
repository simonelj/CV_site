import { useEffect, useState } from "react";
import { workExperienceData } from "../data/WorkExperienceData";
import Markdown from "react-markdown";

export default function WorkExperience()
{
    const[activeTab,setActiveTab] = useState("TechWriter");
    const activeData = workExperienceData[activeTab];


    return(
        <div>
            <h2 id ="workExperience">Work experience</h2>
            <div className="mb-20">
                
                <div className="flex space-x-1 overflow-x-auto ">
                    <button 
                        onClick={() => setActiveTab("TechWriter")}
                        className={`px-3 py-2 backdrop-blur-sm text-md rounded-t-lg border border-2 transition-all duration-300 whitespace-nowrap ${activeTab ==="TechWriter" ? "bg-sky-800 text-white border-t-white border-b-sky-800 z-1":"bg-white/5 text-gray-300 border-white/50 border-b-white hover:bg-white/10"}`}>
                        Technical writer
                    </button>
                    <button 
                        onClick={() => setActiveTab("ResearchAss")}
                        className={`px-3 py-2 backdrop-blur-sm text-md rounded-t-lg border border-2 transition-all duration-300 whitespace-nowrap ${activeTab ==="ResearchAss" ? "bg-sky-800 text-white border-t-white border-b-sky-800 z-1":"bg-white/5 text-gray-300 border-white/50 border-b-white hover:bg-white/10 "}`}>
                        Research assistant
                    </button>
                    <button 
                        onClick={() => setActiveTab("Tutor")}
                        className={`px-3 py-2 backdrop-blur-sm text-md  rounded-t-lg border border-2 transition-all duration-300 whitespace-nowrap ${activeTab ==="Tutor" ? "bg-sky-800 text-white border-t-white border-b-sky-800 z-1":"bg-white/5 text-gray-300 border-white/50 border-b-white hover:bg-white/10"}`}>
                        Tutor
                    </button>
                </div>
                
                <div className="w-full bg-gradient-to-b from-sky-800 to-sky-950  rounded-b-lg rounded-r-lg border border-2 border-white px-20 py-8 -mt-0.5 drop-shadow-md drop-shadow-indigo-800">
                    <h3>
                        {activeData.title}
                    </h3>
                    <div className="text-md font-semibold mb-2 ">{activeData.workPlace}, {activeData.date} </div>
                    
                    <Markdown>{activeData.content}</Markdown>

                </div>
            
            </div>
            
           
        </div>
    )
   
}