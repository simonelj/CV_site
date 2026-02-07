export default function About()
{
    return (
        <div className="animate-in slide-in-from-bottom duration-700 delay-200">
            <h2 id ="about">About</h2>
            <div className="flex bg-gradient-to-b from-sky-700 to-indigo-950 mb-10 rounded-lg p-6 pt-10">
                <div >
                    <h3 className="rotate-270 w-22 h-22 ">At work</h3>
                </div>
                <div>
                    <p>With over six years of experience at MiR, I have tried being a technical writer in a startup environment and played a part in the transition to a more established company. I thrive in a dynamic workplace where new challenges and projects are introduced regularly and there is room to suggest improvements for current processes. </p>
                    <div className="flex items-center " >
                 <img className="p-6 w-1/2" src="\illustrations\Techwriter_light_gradient.png" />
                <p>During my time as a technical writer, I have taken charge of managing several documentation projects and investigating ways to make our work more efficient. This consisted mainly of creating scripts to automate repetitive processes. My strong skill set and technical knowledge, combined with my eagerness to learn and improve, as well as complete the task set in front of me, make me an excellent technical writer and capable internal tool developer. </p>
            </div>
                </div>
                
            </div>
            
            
               <div className="flex bg-gradient-to-b from-sky-700 to-indigo-950 rounded-lg p-6 pt-10 -pb-50">
                <div >
                    <h3 className="rotate-270 w-22 h-22 text-left">At home</h3>
                </div>
                <div className="bg-[url(/illustrations/hiking.png)] bg-contain bg-bottom-right bg-no-repeat bg-w-full min-h-100"> 
                    
                        <p className="max-w-2/3">I live with my son and fiance in a small town just outside Odense. In my spare time, I have an assortment of creative hobbies like painting, pottery, needlework, and cooking. I also prioritze being active and outdoors to keep myself refreshed. This includes hiking, biking, boxing, pilates and yoga. 
                        I’ve lived abroad and schooled in USA and Australia through my childhood, and I worked remotely in France during the COVID-19 pandemic. 

                    </p>
                    
                  
                    
                    
                </div>
                
                    </div>
            
        </div>
    )
}