export interface IRegion {
  id: number,
  name: string,
  icon: string,
  iconAlt: string,
  temperature: IMonth[],
  mapSettings: IMapSettings,
  shape: google.maps.LatLngLiteral[],
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
