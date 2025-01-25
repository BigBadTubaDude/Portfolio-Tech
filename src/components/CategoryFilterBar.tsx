import { usePortfolioEntries } from "../hooks/fetchHooks/usePortfolioEntries";
interface CategoryFilterBarProps {
    selectedCategories: string[];
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  }

export function CategoryFilterBar({
    selectedCategories, setSelectedCategories
} : CategoryFilterBarProps) {
    const { data: portfolioEntries } = usePortfolioEntries();
    const projectCategories: string[] = portfolioEntries?.categories || []


    return (
        <header>
                <h2>{!portfolioEntries ? "Getting Categories..." : "Please select a category"}</h2>
            <nav>
                {
                    projectCategories.map(category => {
                        return (<button className={selectedCategories.includes(category) ? "selected" : ""}
                            key={category}
                            onClick={() => setSelectedCategories((old: string[]) => old.includes(category) ? old.filter((item: string) => item !== category) : [category, ...old])}
                        >
                            {category}
                        </button>)
                    })
                }
            </nav>
        </header>
    )
}