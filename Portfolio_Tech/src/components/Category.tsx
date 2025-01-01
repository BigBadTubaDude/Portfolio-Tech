import { useMemo, useState } from "react";
import { Project } from "./Project";
// import {usePortfolioEntries} from '../hooks/fetchHooks/usePortfolioEntries'
import { usePortfolioEntries } from "../hooks/fetchHooks/usePortfolioEntries";
import { CategoryProps, ProjectEntry } from "../types";

export function Category({ category }: CategoryProps) {
    const { data: portfolioEntries } = usePortfolioEntries();
    const [isExpandedCategory, setIsExpandedCategory] = useState(false)
    function toggleExpandCategory() {
        setIsExpandedCategory(old => !old)
    }
    const categoryProjects = useMemo(() => portfolioEntries?.items?.filter((entry: ProjectEntry) => entry?.tags?.includes(category))
        , [portfolioEntries]
    )
    return <section onClick={toggleExpandCategory} className={isExpandedCategory ? "projects__category--expanded" : ""}>
        <h2>{category}</h2>
        <i className={`${isExpandedCategory ? "up" : "down"} arrow`}></i>
        <div>
            {categoryProjects?.map((entry: ProjectEntry) => {
                return <Project entry={entry} key={`${category}${entry.projectName}`} />
            })}
        </div>
    </section>
}