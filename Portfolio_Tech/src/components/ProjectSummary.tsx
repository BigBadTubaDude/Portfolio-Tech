import { ProjectEntry } from "../types"
import { icons } from "../assets/skillsIcons";
export function ProjectSummary({ project }: { project: ProjectEntry }) {
    const dateWorkedOn = new Date(project.publishedDate)
    const yearWorkedOn = dateWorkedOn.getFullYear()
    const monthWorkedOn = dateWorkedOn.toLocaleString('default', { month: 'long' });

    const skillsUsed = project.skillsUsed || []
    console.log(project)
    return (
        <footer className="project__summary">
            <p>{`${monthWorkedOn} ${yearWorkedOn}`}</p>
            <ul>
                {skillsUsed.map(skill => <li key={skill}><img src={icons[skill] || ""} /></li>)}
            </ul>
        </footer>
    )
}