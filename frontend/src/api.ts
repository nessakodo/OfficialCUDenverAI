import axios from 'axios';

const API_URL = 'APIURL'; 

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, 
});

export default api;