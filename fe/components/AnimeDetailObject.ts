export interface AnimeDetailObject {
    title: Title
    type: Type
    score: Score
    status: Status
    source: Source
    members: Members
    favorites: Favorites
    episodes: Episodes
    episode_duration: EpisodeDuration
    rating: Rating
    sfw: Sfw
    approved: Approved
    start_year: StartYear
    start_season: StartSeason
    real_start_date: RealStartDate
    real_end_date: RealEndDate
    demographic: Demographic
    theme: Theme
    studio: Studio
    producer: Producer
    licensor: Licensor
    genre: Genre
    synopsis: Synopsis
    main_picture: MainPicture
    trailer_url: TrailerUrl
    title_english: TitleEnglish
    title_japanese: TitleJapanese
    title_synonym: TitleSynonym
  }
  
  export interface Title {
    type: string
    value: string
  }
  
  export interface Type {
    type: string
    value: string
  }
  
  export interface Score {
    datatype: string
    type: string
    value: string
  }
  
  export interface Status {
    type: string
    value: string
  }
  
  export interface Source {
    type: string
    value: string
  }
  
  export interface Members {
    datatype: string
    type: string
    value: string
  }
  
  export interface Favorites {
    datatype: string
    type: string
    value: string
  }

  export interface Episodes {
    datatype: string
    type: string
    value: string
  }

  export interface EpisodeDuration {
    datatype: string
    type: string
    value: string
  }

  export interface Rating {
    type: string
    value: string
  }
  
  export interface Sfw {
    datatype: string
    type: string
    value: string
  }
  
  export interface Approved {
    datatype: string
    type: string
    value: string
  }
  
  export interface StartYear {
    datatype: string
    type: string
    value: string
  }
  
  export interface StartSeason {
    type: string
    value: string
  }
  
  export interface RealStartDate {
    datatype: string
    type: string
    value: string
  }

  export interface RealEndDate {
    datatype: string
    type: string
    value: string
  }

  export interface Demographic {
    type: string
    value: string
  }
  
  export interface Theme {
    type: string
    value: string
  }
  
  export interface Studio {
    type: string
    value: string
  }
  
  export interface Producer {
    type: string
    value: string
  }
  
  export interface Licensor {
    type: string
    value: string
  }
  
  export interface Genre {
    type: string
    value: string
  }
  
  export interface Synopsis {
    type: string
    value: string
  }
  
  export interface MainPicture {
    type: string
    value: string
  }
  
  export interface TrailerUrl {
    type: string
    value: string
  }
  
  export interface TitleEnglish {
    "xml:lang": string
    type: string
    value: string
  }
  
  export interface TitleJapanese {
    "xml:lang": string
    type: string
    value: string
  }
  
  export interface TitleSynonym {
    type: string
    value: string
  }
  