export interface IRegion {
  name: string,
  january: IMonth,
  february: IMonth,
  march: IMonth,
  april: IMonth,
  may: IMonth,
  june: IMonth,
  july: IMonth,
  august: IMonth,
  september: IMonth,
  october: IMonth,
  november: IMonth,
  december: IMonth,
}

interface IMonth {
  min: number,
  max: number,
  average: number,
}
