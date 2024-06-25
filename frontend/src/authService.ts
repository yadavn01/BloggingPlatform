import api from './appService';

interface RegisterData{
email: string;
password: string;
}
interface LoginData{
email: string;
password: string;
}

export const register = (data: RegisterData) => {
    return api.post('register', data);
}
export const login = (data: LoginData) => {
    return api.post('login', data);
}