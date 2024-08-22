import axios from 'axios';
import { toast } from 'react-toastify';
const api = axios.create({
    baseURL: 'https://www.efidp.org/efidigiplatform',
    // baseURL: "http://52.140.16.179:8080/efidigiplatform",
   // baseURL: './',
    headers: {
        'Content-Type': 'application/json',
    },
});
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); 
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("intersepctor error",error.message);
        // toast.error(error.message);
        return Promise.reject(error.message);
    }
);

export default api;
