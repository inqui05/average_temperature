export interface IRegion {
  name: string,
  icon: string,
  iconAlt: string,
  temperature: IMonth[],
  mapSettings?: IMapSettings,
}

interface IMonth {
  date: string,
  min: number,
  max: number,
  avg: number,
}

interface IMapSettings {
  lat: number,
  lng: number,
  zoom: number,
}
