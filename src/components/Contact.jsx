import { Underline } from "lucide-react";

export default function Contact()
{
    return(
        <div className="my-10">
            <h2 id ="contact">Contact</h2>
            <p>+45 42 46 82 85</p>
            <p><a href="mailto:simonel.jensen@gmail.com" className="hover:underline text-teal-300">simonel.jensen@gmail.com</a></p>
            <p><a href="https://www.linkedin.com/in/simone-langdal-jensen-24a277180/" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-300">LinkedIn</a></p>
            <p>See the source code for this site <a href="https://github.com/simonelj/CV_site" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-300">here</a>.</p>
        </div>
    )
   
}