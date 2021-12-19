export interface IRegion {
  id: number,
  name: string,
  icon: string,
  iconAlt: string,
  mapSettings: IMapSettings,
  shape: google.maps.LatLngLiteral[],
}

export interface IDayWeather {
  day: number,
  night: number,
  windSpeed?: number,
  condition?: string,
  date?: Date,
  end?: Date,
  avg?: number,
}

interface IMapSettings {
  lat: number,
  lng: number,
  zoom: number,
}

export interface IWeatherData {
  lat: number,
  lng: number,
  timezone: string,
  timezone_offset: number,
  current: {
    clouds: number,
    dew_point: number,
    feels_like: number,
    humidity: number,
    pressure: number,
    sunrise: number,
    sunset: number,
    temp: number,
    uvi: number,
    visibility: number,
    wind_deg: number,
    wind_gust: number,
    wind_speed: number,
    weather: ICurrentWeather[],
  },
  daily: IDailyWeather[],
}

interface ICurrentWeather {
  description: string,
  icon: string,
  id: number,
  main: string,
}

export interface IDailyWeather {
  day: number,
  dew_point: number,
  dt: number,
  feels_like: {
    day: number,
    eve: number,
    morn: number,
    night: number,
  },
  humidity: number,
  moon_phase: number,
  moonrise: number,
  moonset: number,
  pop: number,
  pressure: number,
  snow: number,
  sunrise: number,
  temp: {
    day: number,
    eve: number,
    morn: number,
    night: number,
  },
  uvi: number,
  weather: ICurrentWeather[],
  wind_deg: number,
  wind_gust: number,
  wind_speed: number,
}
