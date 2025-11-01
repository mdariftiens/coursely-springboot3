import axios from 'axios';
import { getSession } from 'next-auth/react';

// Create an Axios instance with base config
const javaApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // e.g., http://localhost:8181
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

javaApi.interceptors.request.use(async (config) => {
    const session = await getSession();
    const token = session?.user?.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        console.log('abc');
    }
    return config;
}, (error) => Promise.reject(error));

// Response interceptor for global error handling
javaApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const { status } = error.response;
            switch (status) {
                case 401:
                    console.error('Unauthorized: Redirect to login or refresh token');
                    break;
                case 403:
                    console.error('Forbidden: You don’t have permission');
                    break;
                case 404:
                    console.error('Not Found: Check the endpoint');
                    break;
                case 429:
                    console.error('Too Many Requests: You are being rate limited');
                    break;
                case 500:
                    console.error('Server Error: Please try again later');
                    break;
                default:
                    console.error(`Unexpected Error [${status}]`, error.response.data);
            }
        } else if (error.request) {
            console.error('No response from server. Possible network error.');
        } else {
            console.error('Error setting up request:', error.message);
        }
        return Promise.reject(error);
    }
);

export default javaApi;
