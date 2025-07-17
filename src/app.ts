import * as http from 'http';

//importing the server controller
import { 
    getFilterEpisodes, 
    getListEpisodes 
} from './controllers/podcasts-controller';

import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (
    request: http.IncomingMessage, 
    response: http.ServerResponse
) => {
        //queryString = dinamic recovering parameters from client
        //http://localhost:3636/api/episode?p=flow
        /*.split("?") will split the route in two pieces: everything before ? will be assigned to baseURL
        and everything after the ? will be assigned to queryString*/
        //.split() breaks the value of req.url into an array with two parameters
        const baseUrl = request.url?.split("?")[0];

        //listar podcasts
        /*req.url is the route
        the combination req.method + req.url is the end-point*/ 
        if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
            //requesting data from server
            await getListEpisodes(request, response);
        }

        //filter episodes
       /*req.url is the route
        the combination req.method + req.url is the end-point*/ 
        if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(request, response);
        }

    };