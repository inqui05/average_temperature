import { IDayWeather, IRegion } from './models/region.model';
import {
  brestRegion, gomelRegion, grodnoRegion, minsk, minskRegion, mogilevRegion, vitebskRegion
} from './polygonData';

export const DEFAULT_YEAR = 2021;
export const DEFAULT_MONTH = 0;
export const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
export const DAYS_PER_YEAR = 365;
const MIN_COEF = 0.8;
const MAX_COEF = 1.2;
const WINTER_MONTH = [11, 0, 1];

// average temperature in Minsk by month. Minsk is approximately the central point of country
const monthCoef = [-5, -5, 0, 7, 13, 16, 19, 18, 12, 6, 2, -3];

enum weatherCondition {
  CLOUDY = 'cloudy',
  SUNNY = 'sunny',
  RAINY = 'rainy',
  FOGGY = 'foggy',
  SNOWFALL = 'snowfall',
}

const generateCondition = (currentMonth: number): string => {
  const allCondition = [weatherCondition.CLOUDY, weatherCondition.FOGGY, weatherCondition.RAINY, weatherCondition.SUNNY, weatherCondition.SNOWFALL];
  let condition = allCondition[Math.floor(Math.random() * (allCondition.length - 1))];

  if (WINTER_MONTH.includes(currentMonth)) {
    condition = condition === weatherCondition.RAINY ? weatherCondition.SNOWFALL : condition;
  }

  return condition;
}

const generateDayWeather = (dayFromNewYear: number): IDayWeather => {
  const curentMonth = new Date(DEFAULT_YEAR, DEFAULT_MONTH, dayFromNewYear).getMonth();
  let condition = generateCondition(curentMonth);

  const avg = Math.floor((monthCoef[curentMonth] * (Math.random() * (MAX_COEF - MIN_COEF) + MIN_COEF) * 10)) / 10;
  const min = Math.floor((avg - Math.random() * Math.abs(avg)) * 10) / 10;
  const max = Math.floor((avg + Math.random() * Math.abs(avg)) * 10) / 10;
  condition = condition === weatherCondition.RAINY && curentMonth === 11 || curentMonth === 0 || curentMonth === 1 ? 'snowfall' : condition;

  return { avg, min, max, condition };
}

const generateTemperatureForYear = (): IDayWeather[] => {
  const weather: IDayWeather[] = [];

  for (let i = 0; i < DAYS_PER_YEAR; i++) {
    weather.push(generateDayWeather(i));
  }

  return weather;
}

export const temperature: IRegion[] = [
  {
    id: 0,
    name: "Минск",
    icon: '../../../../assets/capital.png',
    iconAlt: 'Minsk',
    temperature: generateTemperatureForYear(),
    mapSettings: {
      lat: 53.881,
      lng: 27.553,
      zoom: 11,
    },
    shape: minsk,
  },
  {
    id: 1,
    name: "Брестская область",
    icon: '../../../../assets/brest.png',
    iconAlt: 'Brest region',
    temperature: generateTemperatureForYear(),
    mapSettings: {
      lat: 52.485,
      lng: 25.482,
      zoom: 7.7,
    },
    shape: brestRegion,
  },
  {
    id: 2,
    name: "Витебская область",
    icon: '../../../../assets/Vitebsk.png',
    iconAlt: 'Vitebsk region',
    temperature: generateTemperatureForYear(),
    mapSettings: {
      lat: 55.2,
      lng: 28.892,
      zoom: 7.6,
    },
    shape: vitebskRegion,
  },
  {
    id: 3,
    name: "Гомельская область",
    icon: '../../../../assets/Homel.png',
    iconAlt: 'Gomel region',
    temperature: generateTemperatureForYear(),
    mapSettings: {
      lat: 52.22,
      lng: 29.889,
      zoom: 7.53,
    },
    shape: gomelRegion,
  },
  {
    id: 4,
    name: "Гродненская область",
    icon: '../../../../assets/grodno.png',
    iconAlt: 'Grodno region',
    temperature: generateTemperatureForYear(),
    mapSettings: {
      lat: 53.882,
      lng: 25.432,
      zoom: 7.4,
    },
    shape: grodnoRegion,
  },
  {
    id: 5,
    name: "Минская область",
    icon: '../../../../assets/Minsk.png',
    iconAlt: 'Minsk region',
    temperature: generateTemperatureForYear(),
    mapSettings: {
      lat: 53.792,
      lng: 27.629,
      zoom: 7.2,
    },
    shape: minskRegion,
  },
  {
    id: 6,
    name: "Могилевская область",
    icon: '../../../../assets/Mohilev.png',
    iconAlt: 'Mogilev region',
    temperature: generateTemperatureForYear(),
    mapSettings: {
      lat: 53.62,
      lng: 30.397,
      zoom: 7.8,
    },
    shape: mogilevRegion,
  },
];
