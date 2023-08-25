import request from 'request';

import { injectEnvFiles } from '../envs';
injectEnvFiles('.env', '');

export type Address = {
  city: string;
  street: string;
  text: string;
  lat: string;
  lon: string;
};

export type Social = {
  name: string;
  url?: string;
}

export type Organization = {
  id: string;
  name: string;
  description: string;
  poster: string; //
  socials: Social[];
};

export type Event = {
  id: string; //
  parentid: string;
  status: string;
  recurringStatus: string;
  hits: string;
  title: string; //
  isAdvertisement: boolean;
  isRepeated: boolean;
  GAID: unknown;
  startDate: string; //
  endDate: string; //
  minPrice: number; //
  maxPrice: number; ///
  ordersNumber: number;
  ticketsNumber: number;
  allowRegistration: boolean;
  categories: string[]; // ids
  address: Address; //
  contact_phone: string; //
  ofertaLink: string;
  organization: Organization;
};

export type Events = Event[];

export type ResponseEvents = {
  count: number;
  remaining: number;
  list: Events;
}

export type EventQueryParams = {
  recommended?: number;
  city?: string;
  startDate?: string;
  endDate?: string;
  categoryIds?: number | number[];
  excludeIds?: number | number[];
}

export function getEvents(params: EventQueryParams): request.Request {
  const url = new URL(`${process.env.SERVER_URL}/api/events`);

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      url.searchParams.append(`${key}[]`, String(value));
    } else {
      url.searchParams.set(key, String(value));
    }
  });

  return request(url.toString());
}
