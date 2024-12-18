import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.openai.com/v1/chat/completions', // API 基址
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // 從環境變數讀取 API Key
    },
});

export default axiosInstance;