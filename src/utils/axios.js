import axios from 'axios';

import { PUBLIC_KEY } from '../constants';

const instance = axios.create({
  baseURL: 'http://delagro-api.herokuapp.com/api/v1/',
  headers: { 'access-token': PUBLIC_KEY },
});

export default instance;
