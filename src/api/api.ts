import axiosInstance from './request';
import type { chatMsg } from "@/types";

export const chatWithGPT = async (messages: chatMsg[]) => {
    const response = await axiosInstance.post('', {
        model: 'gpt-3.5-turbo',
        messages,
    });
    return response; // 返回完整的回應，而不只是 response.data
};