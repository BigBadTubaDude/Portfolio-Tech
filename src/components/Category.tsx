import { useMemo } from "react";
import { Project } from "./Project";
import { usePortfolioEntries } from "../hooks/fetchHooks/usePortfolioEntries";
import { CategoryProps, ProjectEntry } from "../types";

export function Category({ category }: CategoryProps) {
    const { data: portfolioEntries } = usePortfolioEntries();
    const categoryProjects = useMemo(() => portfolioEntries?.items?.filter((entry: ProjectEntry) => entry?.tags?.includes(category))
        , [portfolioEntries]
    )
    return <section className="projects__category--expanded">
        <h2>{category}</h2>
        <div>
            {categoryProjects?.map((entry: ProjectEntry) => {
                return <Project entry={entry} key={`${category}${entry.projectName}`} />
            })}
        </div>
    </section>
}