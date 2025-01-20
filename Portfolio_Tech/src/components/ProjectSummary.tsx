import { ProjectEntry } from "../types"
export function ProjectSummary({project}: {project: ProjectEntry}) {
    const dateWorkedOn = new Date(project.dateRangeStart)
    const monthWorkedOn = dateWorkedOn.getMonth()
    console.log(project)
    return (
        <>
            <p>{monthWorkedOn}</p>
        </>
    )
}