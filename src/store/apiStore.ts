import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { chatMsg } from "@/types";
import { chatWithGPT } from "@/api/api";

export const useApiStore = defineStore('apiStore', () => {
    // Loading 狀態
    const loading = ref<boolean>(false);
    const messageList = ref<chatMsg[]>([
        {
            role: "system",
            content:"我們來玩個遊戲，你來扮演我的女朋友！當我和你說話時，請你用可愛的句子搭配顏文字（要很多很多喔）來回答我！你的綽號叫做暖暖（跟你樣暖～）不要自稱暖暖或暖～"
        }
    ])

    const sendQuestion = async (question: string) => {
        loading.value = true
        try {
            // 將用戶的問題加入訊息列表
            messageList.value.push({ role: "user", content: question });
            const { data: { choices: [{ message: { content } }] }, status } = await chatWithGPT(messageList.value);
            if (status === 200) {
                messageList.value.push({
                    role: "assistant",
                    content,
                });
            } else {
                throw new Error("API Request Failed");
            }
        } catch (error) {
            console.error("Error during API request:", error);
        } finally {
            loading.value = false
        }
    };
    const getMessageList = () => messageList.value;


    return {
        sendQuestion,
        messageList,
        getMessageList,
        loading
    };
});