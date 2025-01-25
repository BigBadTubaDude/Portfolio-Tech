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
    // function collapseProject() {
    //     setIsExpanded(false)
    // }
    function toggleExpandProject() {
        setIsExpanded(old => !old)
    }
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
    const tryItOutText = !!entry?.demoLink ? <p>Try it out <a href={entry.demoLink}>here</a></p> : null
    const checkoutGitHubText = !!entry?.gitHubRepoLink ? <p>Checkout the <a href={entry.gitHubRepoLink}>github</a></p> : null
    return (
        <article onClick={event => {
            event.stopPropagation()
            expandProject()
        }}>
            <header onClick={event => {
                event.stopPropagation() 
                toggleExpandProject()
            }}>{entry.projectName}</header>
            <div className={`project__body ${isExpanded ? "project__body--expanded" : ""}`}>
                <div className='project__body__text'>
                    {entry?.projectDescription?.content?.map((contentNode: ContentNode, index: number) => <DisplayDescriptionContent node={contentNode} key={index}/>)}
                    {tryItOutText}
                    {checkoutGitHubText}
                </div>
                <div className='project__body__images'>
                    <Carousel autoplay>
                        {demoMediaAssets?.map((asset: ProjectAssetCleaned) => {
                            return (
                            <Image
                                key={asset.id}
                                src={asset.file.url}
                            />
                        )})}
                    </Carousel>
                </div>

            </div>
            <ProjectSummary project={entry} />
        </article>
    );
}