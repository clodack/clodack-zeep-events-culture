import request from 'request';

import { injectEnvFiles } from '../envs';
injectEnvFiles('.env', '');

export type FilterCities = {
  id: string;
  title: string;
  sortOrder: number;
};

export type FilterProces = {
  id: string;
  title: string;
  sortOrder: number;
  range: {
    min: number;
    max: number;
  };
}

export type Dictionaries = {
  filterPrices: FilterProces[];
  filterCities: FilterCities[];
}

export type ResponseConfigs = {
  dictionaries: Dictionaries;
}

export function getConfigs(): request.Request {
  return request(`${process.env.SERVER_URL}/api/events/config`)
}
