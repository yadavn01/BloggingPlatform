import axios from 'axios';

const API_URL = 'http://backend/api/auth';

const api = axios.create(
    {
        baseURL: API_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    }
);

export default api;
