import { useState } from 'react';
import { usePortfolioEntries } from '../hooks/fetchHooks/usePortfolioEntries'
import { ProjectEntry, ProjectAssetCleaned, DemoMedia, ContentNode } from '../types';
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
    function DisplayDescriptionContent( {node} : { node: ContentNode}) {
        if (node?.nodeType === "paragraph") {
            return <p>
                {node?.content[0].value}
            </p>
        }
        else {
            // const nodeImageID = node.data.target.sys.id
            return <></>
        }
    }
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
    console.log(entry)
    return (
        <article onClick={event => {
            event.stopPropagation()
            expandProject()
        }}>
            <header>{entry.projectName}</header>
            <div className={`project__body ${isExpanded ? "project__body--expanded" : ""}`}>
                <div className='project__body__text'>
                    {entry?.projectDescription?.content?.map((contentNode: ContentNode, index: number) => <DisplayDescriptionContent node={contentNode} key={index}/>)}
                </div>
                <div className='project__body__images'>
                    <Carousel autoplay>
                        {demoMediaAssets?.map((asset: ProjectAssetCleaned) => (
                            <Image
                                key={asset.id}
                                src={asset.file.url}
                            />
                        ))}
                    </Carousel>
                </div>

            </div>
            <ProjectSummary project={entry} />
        </article>
    );
}