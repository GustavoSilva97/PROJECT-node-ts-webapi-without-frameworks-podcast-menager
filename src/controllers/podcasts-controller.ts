//importing http requests and responses to controller and enums
import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

const DEFAULT_CONTENT = {'Content-Type': ContentType.JSON};

//to select episodes = GET, to server send requested data > response = Header + Content
export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse) => {
    /*
    res.writeHead to put informations direct inside the Header of the http response
    I'm defining the status code and the content type of the response
    */

    const content: PodcastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    /*
    res.write to write the content of the Response (the content is the end of the response)
    */
    res.write(JSON.stringify(content.body))
    //end content
    res.end();
};

export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    
    //passing queryString as parameter to filter the podcasts
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
};