import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useUserSettingStore = defineStore('userSetting', () => {
    // DarkMode
    const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');

    watch(isDarkMode, (newVal) => {
        localStorage.setItem('darkMode', String(newVal));
        newVal ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }, { immediate: true }); // `immediate: true` 保證初始化時同步狀態到 DOM

    // 3. 返回狀態
    return {
        isDarkMode,
    };
});