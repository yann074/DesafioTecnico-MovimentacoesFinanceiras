// service/Api.tsx (Se você realmente estiver utilizando TypeScript)

import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Ajuste conforme necessário
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;
