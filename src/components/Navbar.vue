<script lang="ts" setup>
import { ref, watch } from "vue";

// 控制遮罩選單的顯示
const showMenu = ref(false);

// 黑夜模式狀態
const isDarkMode = ref(false);

// 切換黑夜模式（直接綁定到 v-model）
watch(isDarkMode, (newVal) => {
    if (newVal) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
});

</script>

<template>
    <nav class="flex w-full h-[68px] px-6 py-4 bg-gray-100 dark:bg-black items-center">
        <h1 class="text-2xl font-bold mx-auto sm:mx-0 text-gray-900 dark:text-gray-100">
            ChatGPT-Vue3
        </h1>

        <div class="hidden sm:flex flex-1 items-center justify-between ml-4 text-sm text-gray-500 dark:text-gray-300">
            <p>基于 OpenAI 的 ChatGPT 自然语言模型人工智能对话</p>
            <button class="btn" @click="showMenu = true">
                設定
            </button>
        </div>

        <div v-if="showMenu" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div class="bg-white dark:bg-gray-900 rounded-lg p-6 w-80 shadow-lg">
                <h2 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
                    設定選單
                </h2>
                <div class="flex items-center justify-between mb-4">
                    <span class="text-gray-700 dark:text-white">黑夜模式</span>
                    <input type="checkbox" class="toggle-checkbox" v-model="isDarkMode" />
                </div>
                <button class="btn mt-4 w-full" @click="showMenu = false">
                    關閉
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.toggle-checkbox {
    appearance: none;
    width: 2rem;
    height: 1rem;
    background-color: #ccc;
    border-radius: 9999px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle-checkbox:checked {
    background-color: #4caf50;
}

.toggle-checkbox::before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    left: 0.25rem;
    transform: translateY(-50%);
    transition: all 0.3s ease;
}

.toggle-checkbox:checked::before {
    left: calc(100% - 1.25rem);
}
</style>