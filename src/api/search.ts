export type SearchResult = {
  results: {
    "opensearch:Query": {
      "#text": string
      role: string
      searchTerms: string
      startPage: string
    }
    "opensearch:totalResults": string
    "opensearch:startIndex": string
    "opensearch:itemsPerPage": string
    "@attr": {
      for: string
    }
    albummatches: {
      album: {
        name: string
        artist: string
        url: string
        image: {
          size: string
          "#text": string
        }[]
        streamable: string
        mbid: string
      }[]
    }
  }
}
