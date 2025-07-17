//criating a "contract" for file format / data has to follow the Podcast format
export interface PodcastModel{
    podcastName: string;
    episode: string;
    videoId: string;
    categories: string[];
}
