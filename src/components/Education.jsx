import EducationEntry from "./subcomponents/educationEntry"
export default function Education()
{
    return (
        <div>
            <h2 id ="education">Education</h2>
            <div className="sm:flex items-center space-x-20">
                <div>
                   <EducationEntry eduTitle="Bsc. Robotics" eduYears= "2015-2019" eduPlace="Aalborg University, Ålborg, Denmark" eduImage ="/AAU.png" />
                   <EducationEntry eduTitle="International Baccalaureate" eduYears= "2013-2015" eduPlace="Grenaa Gymnasium, Grenå, Denmark" eduImage ="/IB.png" />
                </div>
                <div>
                    <img className="w-90" src="\illustrations\education.png"></img>
                </div>
            </div>
            
        </div>
    )
}