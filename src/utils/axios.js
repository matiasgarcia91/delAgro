import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://delagro-api.herokuapp.com/api/v1/',
});

export default instance;
