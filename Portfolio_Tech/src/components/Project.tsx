import { useState } from 'react';
import { usePortfolioEntries } from '../hooks/fetchHooks/usePortfolioEntries'
import { ProjectEntry, ProjectAssetCleaned, DemoMedia } from '../types';
import { ProjectSummary } from './ProjectSummary';
import { Carousel, Image } from 'antd';
export function Project({ entry }: { entry: ProjectEntry }) {
    const [isExpanded, setIsExpanded] = useState(false)
    function expandProject() {
        setIsExpanded(true)
    }
    // function colapseProject() {
    //     setIsExpanded(false)
    // }
    const { data: portfolioEntries } = usePortfolioEntries();
    // Get ids of assets associated with this project
    const demoMediaAssetIDs = entry.demoMedia?.map(
        (media: DemoMedia) => {
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
            expandProject()
        }}>
            <header>{entry.projectName}</header>
            <div className={`project__body ${isExpanded ? "project__body--expanded" : ""}`}>
                <div className='project__body__images'>
                    <Carousel autoplay>

                        {demoMediaAssets?.map((asset: ProjectAssetCleaned) => (
                            <Image
                                key={asset.id}
                                src={asset.file.url}
                                height="500px"
                            />
                        ))}
                    </Carousel>
                </div>

            </div>
            <ProjectSummary project={entry} />
        </article>
    );
}