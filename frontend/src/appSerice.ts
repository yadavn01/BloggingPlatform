import axios from 'axios';

const API_URL = 'http://localhost:5194/api/test';

export const getMessage = () => {
    return axios.get<{ message: string }>(API_URL);
};
