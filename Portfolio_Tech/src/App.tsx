import "./App.css";
import "./reset.css";
import { lazy, Suspense } from "react";

const Projects = lazy(() => import("./components/Projects"))


function App() {
    // const { data: portfolioEntries } = usePortfolioEntries();
    const vertivHomePageURL: string = 'https://www.vertiv.com/en-us/?utm_source=google-ads&utm_medium=paid-search&utm_campaign=vertiv-branding&utm_term=global-na_brand-names&utm_content=en_text-ad_home-page&gad_source=1&gclid=cjwkcaia65m7bhaweiwaagu4jcb1ihqd2hoxp2_emb99ytqfvsnzozbsmlviiwloqa0vamkxbyz8-bocvvcqavd_bwe'
    return (
        <>
            <header id="intro">
                <h1>Programming Portfolio</h1>
                <p id="nameInfo">Name: Coleman Alexander</p>
                <p id="emailInfo">Email: Bigbadtubadude@gmail.com</p>
                <p id="phoneInfo" className="rightInfo">
                    Phone: 864-633-9727
                </p>
                <p id="jobinfo" className="rightInfo">
                    Title: Automation Engineer
                </p>
                <p>Company: <a href={vertivHomePageURL}>Vertiv</a></p>
            </header>     
            <Suspense fallback={<div>Loading...</div>}>
                <Projects />
            </Suspense> 
        </>
    );
}

export default App;

