interface Sys {
    "type": string,
    "linkType": string,
    "id": number
}
export interface DemoMedia {
    "sys": Sys
}
export interface CategoryProps {
    category: string
}
type Skill = 'Python' | 'JavaScript' | 'TypeScript' | 'HTML' | 'CSS' | 'React' | 'DAX' | 'Power Query' | 'SQL' | 'Power BI' | 'Power Automate' | 'MS SQL Server' | 'Canvas (JS)'
export type SkillIcon = Record<Skill, string>;
export interface ContentNode {
        nodeType: string;
        content: { value: string }[];
        data?: {
            target?: {
                sys?: {
                    id: string
                }
            }
        }
    }export interface ProjectEntry {
    "id": string,
    "projectName": string,
    "isDisplay": boolean,
    "skillsUsed": Skill[],
    "projectDescription": {
        "nodeType": string,
        "data": Record<string, unknown>,
        "content": ContentNode[]
    },
    "languageLibraries":  Record<string, string>,
    "demoMedia": DemoMedia[],
    "dateRangeStart": string,
    "publishedDate" : string,
    tags?: string[],
    "sys": Sys,
    "fields" : {
        "projectName": string,
        "isDisplayed": boolean,
        "skillsUsed": string[],
        "demoLink": string,
        "projectDescription": Record<string, string>,
        "dateRangeStart": string,
        "publishedDate": string,
        "tags": string[]
    }
}

export interface ProjectAssetReceived {
    "sys": Sys,
    "fields": {
        "title": string,
        "description": string,
        "file": {
            "url": string,
            "details": Record<string, unknown>,
            "fileName": string,
            "contentType": string,
        }
    }
}
export interface ProjectAssetCleaned {
    id: number,
    file: {
        url: string
    }
}