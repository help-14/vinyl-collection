export type AlbumInfo = {
  color?: string
  album: {
    playcount: string
    name: string
    url?: string
    artist: string
    listeners: string
    mbid?: string
    image: {
      size: string
      "#text": string
    }[]
    tracks?: {
      track: {
        streamable: Record<string, unknown>
        duration: any
        url: string
        name: string
        "@attr": { rank: number }
        artist: { url: string; name: string; mbid: string }
      }[]
    }
    tags?: {
      tag: {
        url: string
        name: string
      }[]
    }
    wiki?: {
      published: string
      summary: string
      content: string
    }
  }
}
