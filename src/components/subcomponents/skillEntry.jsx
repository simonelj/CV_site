import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function SkillEntry({ skillTitle, skillList, skillContent })
{
    const listItems = skillList.map((item) =>
        <li>{item}</li>
    );

    const[entryIsOpen,setEntryIsOpen] = useState()

    return(
        <div className={`${entryIsOpen ? "col-span-3":"col-span-1"} drop-shadow-md drop-shadow-indigo-800 bg-gradient-to-b from-sky-800 to-sky-950  rounded-lg border border-1 border-white p-6 transition-all hover:scale-102 `} onClick={() => setEntryIsOpen((prev) => !prev)}>
            <h3>{skillTitle}</h3>
            
            <ul>{listItems}</ul>
                  
            <div className={`${entryIsOpen ? "block":"hidden"}`}>{skillContent}</div>
             
            
        </div>
    )
}