import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    //define interface
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };

    //catch data
    const data = await repoPodcast();

    //verify response  
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;

    responseFormat.body = data;

    return responseFormat;
};