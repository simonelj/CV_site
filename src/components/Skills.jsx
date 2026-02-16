import SkillEntry from "./subcomponents/skillEntry"

export default function Skills()
{ return(
    <div>
        <h2 id ="skills">Skills</h2>

        <div className="flex flex-wrap gap-2 justify-center">
            <SkillEntry 
            skillTitle="Docs-as-code"  
            skillList={[`Markdown`, `git`, `VS code`, `React`, `AI tools`]} 
            skillContent="I've lead the project to reconstruct our documentation site using docs-as-code. The new site uses a React-based platform with Markdoc syntax for the documentation pages. I visualized, tested, and implemented the version control, file structure, piepline and automated tools for this project. "
            skillImage="docs-to-code.png"/>
            <SkillEntry 
            skillTitle="Technical writing"  
            skillList={[`Madcap Flare`, `Single sourcing`, `Direct contact with R&D`, `Consistent styling and tone`]} 
            skillContent="I have managed and written documentation in Madcap Flare for the past 8 years. I am well prcaticed at single sourcing text where possible and maintaining file structure for efficient collaboration in the technical writing team. I am used to communicating diractly with R&D to understand software and hardware features. "
            skillImage="typewriter.png"/>
            <SkillEntry 
            skillTitle="3D modelling"  
            skillList={[`Blender`, `SolidWorks`, `PDM Vault`]} 
            skillContent="I have used Blender to render images of 3D models for part maintenance and replacement guides. I can construct my own models, apply materials, create textures, and generate simple animations. In collaboration with our hardware department, I would retrieve the latest versions of 3D models in their SolidWorks PDM Vault environment, and make minor adjustments to the models before exporting them for use in Blender. "
            skillImage="sculptor.png"/>
            <SkillEntry 
            skillTitle="Illustrations and image editing"  
            skillList={[`Figma`, `Photoshop`, `Illustrator`]} 
            skillContent="I have used Figma over the last years to create and organize all our graphical content. I have managed our component library , ensuring correct usage of components and creating new components as needed and agreed on with our graphical designer. I previously used the Adobe suite for various image editing and graphical creation."
            skillImage="painting.png"/>
            <SkillEntry 
            skillTitle="Programming"  
            skillList={[`Python`, `HTML`, `CSS`, `Object oriented programming`, `APIs`]} 
            skillContent="I learned C++ programming at University, but at work I have more frequently made use of Python for automating various tasks for documentation. For many of my documentation tools, I have used APIS to upload and download files from interfaces like Figma and JIRA. I also have experience testing the APIs for MiR products and reading parts of the code in the MiR software. "
            skillImage="programming.png"/>
            <SkillEntry 
            skillTitle="Task and team management"  
            skillList={[`Microsoft office`, `JIRA`, `Confluence`, `SCRUM`, `OKR`]} 
            skillContent="I can use most Microsoft products like Word, Excel, Outlook, Teams, and Sharepoint. For task management and internal documentation I am used to using Atlassisan's JIRA and Confluence platforms. I have experience working in SCRUM teams and using OKRs to set goals and measure progress."
            skillImage="management.png"/>
        </div>
        
    </div>
)
}