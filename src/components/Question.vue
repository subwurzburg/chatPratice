<script lang="ts" setup>
import { ref } from "vue"
import { useApiStore } from "@/store/apiStore";

const apiStore = useApiStore(); // 引入 Pinia Store

// 輸入框
const questionContent = ref<string>("")

const clearQuestionHandler = (): void => {
    questionContent.value = "";
}

const sendQuestionHandler = async (): Promise<void> => {
    if (questionContent.value.trim()) {
        await apiStore.sendQuestion(questionContent.value);
        clearQuestionHandler();
    }
};
</script>
<template>
    <div class="fixed bottom-0 left-0 flex w-full h-[96px] p-6 pb-8 bg-gray-100 dark:bg-black">
        <input type="text" class="input" v-model="questionContent" @keydown.enter="sendQuestionHandler()"/>
        <button class="btn" @click="sendQuestionHandler">發送</button>
    </div>
</template>