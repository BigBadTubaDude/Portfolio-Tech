import { Category } from "./Category"
import { usePortfolioEntries } from "../hooks/fetchHooks/usePortfolioEntries";

export default function Projects() {
    const { data: portfolioEntries, isLoading} = usePortfolioEntries();
    // Get list of unique categories the projects fall under
    const projectCategories : string[] =  portfolioEntries?.categories || []
    return (
        <main>
                {isLoading ? "Loading..." : projectCategories.map((category: string)=> <Category key={category} category={category}/>)}
        </main>
)
}