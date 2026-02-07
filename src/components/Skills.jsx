import SkillEntry from "./subcomponents/skillEntry"

export default function Skills()
{ return(
    <div>
        <h2 id ="skills">Skills</h2>

        <div className="grid grid-cols-3 space-y-4 space-x-4">
            <SkillEntry skillTitle="Docs-as-code"  skillList={[`Markdown`, `git`, `VS code`, `React`]} skillContent="Content1"/>
            <SkillEntry skillTitle="Technical writing"  skillList={[`Madcap Flare`, `Simplified technical english`, `Consistent styling and tone`]} skillContent="Content1"/>
            <SkillEntry skillTitle="3D modelling"  skillList={[`Markdown`, `git`, `VS code`, `React`]} skillContent="Content1"/>
            <SkillEntry skillTitle="Image editing"  skillList={[`Markdown`, `git`, `VS code`, `React`]} skillContent="Content1"/>
            <SkillEntry skillTitle="Programming"  skillList={[`Markdown`, `git`, `VS code`, `React`]} skillContent="Content1"/>
            <SkillEntry skillTitle="Management"  skillList={[`Markdown`, `git`, `VS code`, `React`]} skillContent="Content1"/>
            <div></div>
        </div>
        
    </div>
)
}