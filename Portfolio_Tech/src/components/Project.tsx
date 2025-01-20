import { useState } from 'react';
import { usePortfolioEntries} from '../hooks/fetchHooks/usePortfolioEntries'
import { ProjectEntry, ProjectAssetCleaned, DemoMedia } from '../types';
import { ProjectSummary } from './ProjectSummary'; 
export function Project({entry}: {entry:ProjectEntry}) {
    const [isExpanded, setIsExpanded] = useState(false)
    function toggleExpandProject() {
        setIsExpanded(old => !old)
    }
    const { data: portfolioEntries } = usePortfolioEntries();
    // Get ids of assets associated with this project
    const demoMediaAssetIDs = entry.demoMedia?.map(
        (media : DemoMedia) => {
          return media.sys.id
        }
    );
    // Use asset ids to get assets
    const demoMediaAssets = portfolioEntries?.assets.filter(
        (asset: ProjectAssetCleaned) => demoMediaAssetIDs?.includes(asset.id)
    );
    return (
        <article onClick={event => {
            event.stopPropagation()
            toggleExpandProject()
        }}>
            <header>{entry.projectName}</header>
            {isExpanded ? demoMediaAssets?.map((asset: ProjectAssetCleaned) => (
                <img 
                  key={asset.id} 
                  src={asset.file.url} 
                />
            )) : null}
            <ProjectSummary project={entry}/>
        </article>
    );
}