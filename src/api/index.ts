import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        method: 'GET',
        Authorization: `Bearer ${process.env.API_KEY}`,
        'Content-type': 'application/json',
      },
      params: {
        language: 'pt-BR',
      },
});

export {api};