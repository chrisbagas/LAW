export interface AdvanceObject {
  status: Status[]
  genre: Genre[]
  theme: Theme[]
  demo: Demo[]
  tipe: Tipe[]
  start_year: StartYear[]
  start_season: StartSeason[]
}

export interface Status {
  statusId: StatusId
  statusName: StatusName
}

export interface StatusId {
  type: string
  value: string
}

export interface StatusName {
  type: string
  value: string
}

export interface Genre {
  genreId: GenreId
  genreName: GenreName
}

export interface GenreId {
  type: string
  value: string
}

export interface GenreName {
  type: string
  value: string
}

export interface Theme {
  themeId: ThemeId
  themeName: ThemeName
}

export interface ThemeId {
  type: string
  value: string
}

export interface ThemeName {
  type: string
  value: string
}

export interface Demo {
  demographicId: DemographicId
  demographicName: DemographicName
}

export interface DemographicId {
  type: string
  value: string
}

export interface DemographicName {
  type: string
  value: string
}

export interface Tipe {
  typeId: TypeId
  typeName: TypeName
}

export interface TypeId {
  type: string
  value: string
}

export interface TypeName {
  type: string
  value: string
}

export interface StartYear {
  start_yearId: StartYearId
  start_yearName: StartYearName
}

export interface StartYearId {
  type: string
  value: string
}

export interface StartYearName {
  datatype: string
  type: string
  value: string
}

export interface StartSeason {
  start_seasonId: StartSeasonId
  start_seasonName: StartSeasonName
}

export interface StartSeasonId {
  type: string
  value: string
}

export interface StartSeasonName {
  type: string
  value: string
}
