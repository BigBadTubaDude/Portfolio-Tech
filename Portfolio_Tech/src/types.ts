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
export interface ProjectEntry {
    "id": string,
    "projectName": string,
    "isDisplay": boolean,
    "skillsUsed": string[],
    "projectDescription": {
        "nodeType": string,
        "data": Record<string, unknown>,
        "content": Record<string, unknown>[]
    },
    "languageLibraries":  Record<string, string>,
    "demoMedia": DemoMedia[],
    "dateRangeStart": string,
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