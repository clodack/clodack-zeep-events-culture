import express from 'express';

import { injectEnvFiles } from './envs';

import { getCategories, getConfigs, getEvents } from './routes';

injectEnvFiles('.env', '');

const app = express();

app.get('/events/list', (req, res) => {
  getEvents(req.params || {}).pipe(res);
})

app.get('/events/categories', (req, res) => {
  getCategories().pipe(res);
})

app.get('/events/config', (req, res) => {
  getConfigs().pipe(res);
})

app.listen(process.env.SERVER_PORT || 8002, () => {
  console.log(`Server starting in ${process.env.SERVER_PORT || 8002} port`);
});
