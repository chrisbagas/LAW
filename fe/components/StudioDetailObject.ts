export interface StudioDetailObject {
    animeId: AnimeId
    main_picture: MainPicture
    animeTitle: AnimeTitle
  }
  
  export interface AnimeId {
    type: string
    value: string
  }
  
  export interface MainPicture {
    type: string
    value: string
  }
  
  export interface AnimeTitle {
    type: string
    value: string
  }