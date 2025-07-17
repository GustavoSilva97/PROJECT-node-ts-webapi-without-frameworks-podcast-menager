/*
importing filesystem, a package native from nodjs
it writes and read files from system
*/
import fs from "fs";
//importing path, native nodejs package. it read specific directorys
import path from "path";

//importing model Podcast
import { PodcastModel } from "../models/podcast-model";

//__dirname: dinamic catching file path
const pathData = path.join(__dirname, "../repositories/podcasts.json");

/*Promise to return a Podcast[] > defining that the function respect the Podcast interface
podcastName? to create a function that could accept or not parameters, query parameters*/
export const repoPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    
    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

/*filter podcasts based on the parameter gived by user (podcastName): if podcastName has any value, or, if podcastName
is given by user, then filter the jsonFile to search for episodes with that podcastName property*/
if(podcastName){
    jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
}

    return jsonFile;
}