import { getPortfolioEntries } from "../../fetchfunctions";
import { useQuery } from "@tanstack/react-query";
import { ProjectEntry, ProjectAssetReceived } from "../../types";
export function usePortfolioEntries() {
    return useQuery({
        queryKey: ["portfolioEntries"],
        queryFn: getPortfolioEntries,
        staleTime: Infinity,
        select  : data => {
            const sortedPortfolioEntries = data.items.sort((entryA: ProjectEntry, entryB: ProjectEntry) => {
                const dateA = new Date(entryA.fields.publishedDate).getTime()
                const dateB = new Date(entryB.fields.publishedDate).getTime()
                return dateB - dateA
            })
            const portfolioEntries = sortedPortfolioEntries.map((entry: ProjectEntry) => {
                return {
                    id: entry.sys.id,
                    ...entry.fields
                }
        })
            const portfolioAssets = data.includes.Asset.map((asset: ProjectAssetReceived) => {
                return {
                    id: asset.sys.id,
                    ...asset.fields
                }
            })
            const portfolioCategories: string[]= [...new Set(sortedPortfolioEntries.flatMap((entry: ProjectEntry) => entry.fields.tags ?? []) as string[])]
    
            return {
                items : portfolioEntries,
                assets : portfolioAssets,
                categories : portfolioCategories,
            }
        }
    });
}
