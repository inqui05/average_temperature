import { IRegion } from './models/region.model';
import {
    brestRegion, gomelRegion, grodnoRegion, minsk, minskRegion, mogilevRegion, vitebskRegion
} from './polygonData';

export const temperature: IRegion[] = [
  {
    id: 0,
    name: "Минск",
    icon: '../../../../assets/capital.png',
    iconAlt: 'Minsk',
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
    mapSettings: {
      lat: 53.62,
      lng: 30.397,
      zoom: 7.8,
    },
    shape: mogilevRegion,
  },
];
