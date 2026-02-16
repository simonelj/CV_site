import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function SkillEntry({ skillTitle, skillList, skillContent, skillImage })
{
    const listItems = skillList.map((item, idx) =>
        <li key={idx}>{item}</li>
    );

    const[entryIsOpen,setEntryIsOpen] = useState(false)

    return(
        <div className={`${entryIsOpen ? "w-224" : "w-111"} drop-shadow-md drop-shadow-indigo-800 bg-gradient-to-b from-sky-800 to-sky-950 rounded-lg border border-1 border-white p-4 transition-all hover:scale-102`} onClick={() => setEntryIsOpen((prev) => !prev)}>
            <h3>{skillTitle}</h3>
            
            <div className="flex space-x-5">
                <img className={`w-40 ${entryIsOpen ? "hidden sm:block":"block"} `} src={`illustrations/${skillImage}`} />
                <div className={`${entryIsOpen ? "hidden":"block"} w-full`}><ul >{listItems}</ul></div>
                 <div className={`${entryIsOpen ? "hidden":"block"} items-center flex m-0`}><ChevronRight /></div>
                  
                <div className={`${entryIsOpen ? "block":"hidden"} mt-6 ml-10 justify-items-center`}>
                    {skillContent}
                    </div>


            </div>
            <div className= {`${entryIsOpen ? "block":"hidden"} mt-2 justify-items-center`}><ChevronUp /></div>
        </div>
    )
}