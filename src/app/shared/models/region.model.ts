export interface IRegion {
  id: number,
  name: string,
  icon: string,
  iconAlt: string,
  temperature: IDayWeather[],
  mapSettings: IMapSettings,
  shape: google.maps.LatLngLiteral[],
}

export interface IDayWeather {
  avg: number,
  min: number,
  max: number,
  condition?: string,
  date?: Date,
  end?: Date,
}

interface IMapSettings {
  lat: number,
  lng: number,
  zoom: number,
}
