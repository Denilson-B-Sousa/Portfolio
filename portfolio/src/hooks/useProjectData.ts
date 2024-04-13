import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProjectData} from "../interfaces/project-data";



const API_URL = "http://localhost:8080/projects";

const fetchData = async (): AxiosPromise<ProjectData[]> => {
    const response = await axios.get(API_URL);
    return response;
}

export function useProjectData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['project-data']
    })

    return {
        ...query,
        data: query.data
    }
}


