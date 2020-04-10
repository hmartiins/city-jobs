import axios from 'axios';

const api = axios.create({
   baseURL: 'http://localhost:3333',
});

console.log('Connected to the database')

export default api;
