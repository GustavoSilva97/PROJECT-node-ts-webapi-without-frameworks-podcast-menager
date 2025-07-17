# Podcast Menager

## What I'm doing?

### Descrição

Um app ao estilo Netflix, aonde eu possa centralizar diferentes episódios 
de podcasts, separados por categoria

### Domínio

Poscasts feitos em vídeo

### Features

- Listar os episódios de podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor, política, ciência, category]

- Filtrar episódios por nome de podcast

## How I'm doing?

### Feature:
- Listar os episódios de podcasts em sessões de categorias

#### Como vou implementar:

HTTP GET: retorna lista de episódios

 response: V

Retornar em uma API Rest o:
    - nome do podcast
    - nome do episódio
    - imagem de capa
    - link

    ```js
    [
        {
            podcastName: "flow",
            episode: "CBUM - Flow #319",
            videoId: "pQSuQmUfS30",
            cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
            link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
            category: ["saúde", "fitness", "bodybuilding"]
        },
        {
            podcastName: "flow",
            episode: "GUSTAVO GAIOFATO - Flow #463",
            videoId: "FEuAZWDrAKs",
            cover: "https://i.ytimg.com/vi/FEuAZWDrAKs/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLAFCaV5OHBrrDA3Mq1-4i9UIWRisA",
            link: "https://www.youtube.com/watch?v=FEuAZWDrAKs",
            category: ["política", "história"]
        }
    ]
    ```

GET: get podcast list based on a parameter given by the client







