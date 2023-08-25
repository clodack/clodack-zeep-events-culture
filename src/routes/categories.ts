import request from 'request';

import { injectEnvFiles } from '../envs';
injectEnvFiles('.env', '');

export type Category = {
  id: number;
  title: string;
  description?: string;
}

export type Categories = Category[];

export function getCategories(): request.Request {
  return request(`${process.env.SERVER_URL}/api/categories`)
}
