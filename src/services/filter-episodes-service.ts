import { repoPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastTransferModel> => {
    
//queryString = dinamic recovering parameters from client
        //http://localhost:3636/api/episode?p=flow
        /*.split("?") will split the route in two pieces: everything before ? will be assigned to baseURL
        and everything after the ? will be assigned to queryString*/
        //.split() breaks the value of req.url into an array with two parameters
    //http://localhost:3636/api/episode?p=flow
    
    //return interface defined
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };
    
    //catching data
    //spliting by var name
                                            //V getting only position 1 in the array
    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repoPodcast(queryString);

    //verify if that's content
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;
    /*if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }*/
    
    responseFormat.body = data;

    return responseFormat;
}