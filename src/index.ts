import httpProxy from 'http-proxy';
import express from 'express';
import request from 'request';

import { injectEnvFiles } from './envs';

injectEnvFiles('.env', '');

const app = express();

app.get('/afisha/list', (req, res) => {
  const newURL = new URL(`${process.env.SERVER_URL}/api/events`)

  newURL.searchParams.append('city', 'Москва');
  newURL.searchParams.append('categoryIds[]', '460');

  request(newURL.toString()).pipe(res);
})

app.listen(process.env.SERVER_PORT || 8001, () => {
  console.log(`Server starting in ${process.env.SERVER_PORT || 8001} port`);
});
