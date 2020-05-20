import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pediatric-collection-backend.herokuapp.com/',
});

export default api;
