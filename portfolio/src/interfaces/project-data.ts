export interface ProjectData {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    repositoryUrl: string,
    liveUrl: string
}

export interface ProjectResponse {
    data: ProjectData[];
}