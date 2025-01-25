import { ProjectEntry } from "../types"
import { icons } from "../assets/skillsIcons";
export function ProjectSummary({ project }: { project: ProjectEntry }) {
    const dateWorkedOn = new Date(project.publishedDate)
    const yearWorkedOn = dateWorkedOn.getFullYear()
    const monthWorkedOn = dateWorkedOn.toLocaleString('default', { month: 'long' });

    const skillsUsed = project.skillsUsed.sort((a: string, b: string) => a.localeCompare(b)) || []
    return (
        <footer className="project__summary">
            <p>{`${monthWorkedOn} ${yearWorkedOn}`}</p>
            {skillsUsed.map(skill => icons[skill] ? <img key={skill} src={icons[skill] || ""}/> : null)}
        </footer>
    )
}