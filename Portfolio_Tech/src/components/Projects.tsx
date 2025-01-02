import { Category } from "./Category"
import { CategoryFilterBar } from "./CategoryFilterBar";
import { useState } from "react";

export default function Projects() {
    // Get list of unique categories the projects fall under    
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    return (
        <main>
                <CategoryFilterBar 
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                />
                {selectedCategories.map((category: string)=> <Category key={category} category={category} />)}
        </main>
)
}