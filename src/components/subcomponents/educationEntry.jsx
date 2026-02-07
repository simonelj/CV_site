export default function EducationEntry({eduTitle,eduYears,eduPlace,eduImage})
{
    return( 
    <div className="flex items-center mb-10">
        <div className="p-3 bg-white rounded-full"><img className="w-10 h-10" src={eduImage} ></img></div>
        <div className="ml-10">
            <h3>{eduTitle}</h3>
            <div className="text-md font-semibold mb-2 ">{eduYears}</div>
            <p>{eduPlace} </p>
        </div>
    </div>
    )
}