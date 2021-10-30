export interface IRegion {
  name: string,
  icon: string,
  iconAlt: string,
  temperature: IMonth[],
}

interface IMonth {
  date: string,
  min: number,
  max: number,
  avg: number,
}
