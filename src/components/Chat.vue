<script lang="ts" setup>
import { useApiStore } from "@/store/apiStore";
import { ref, watch, onUpdated } from "vue"

const apiStore = useApiStore(); // 引入 Pinia Store

const roleAlias = { user: "ME", assistant: "ChatGPT", system: "System" };

// 參考消息容器的 DOM 元素
const messageContainer = ref<HTMLDivElement | null>(null);

// 滾動到容器的最底部
const scrollToBottom = () => {
    if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    }
};

// 監聽消息列表變化，滾動到底部
watch(
    () => apiStore.getMessageList(), // 監聽消息列表
    () => {
        scrollToBottom();
    },
    { deep: true } // 深層監聽
);

// 當組件更新時滾動到底部
onUpdated(scrollToBottom);
</script>

<template>
    <div class="dark:bg-gray-900 h-[calc(100vh-96px-68px)]">
        <div class="flex-1 mx-2 my-2 h-full overflow-y-auto" ref="messageContainer">
            <div class="group flex flex-col px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                v-for="(msg, index) in apiStore.getMessageList().filter((i) => i.role !== 'system')" :key="index">
                <div class="mb-2">
                    <p class="font-bold text-gray-900 dark:text-white"> {{ roleAlias[msg.role] }}:</p>
                </div>
                <div class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {{ msg.content }}
                </div>
            </div>
        </div>
    </div>
</template>