import { PodcastModel } from "./podcast-model";

//dto = data transfer object -> it's an object only for data transfer
export interface PodcastTransferModel{
    statusCode: number;
    body: PodcastModel[];
}