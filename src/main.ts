import { createApp } from 'vue';
import { createPinia } from 'pinia'; // 引入 Pinia
import App from './App.vue';
import './style.css';

// 創建 Vue 應用
const app = createApp(App);

// 安裝插件
const pinia = createPinia();
app.use(pinia); // 使用 Pinia 作為全局狀態管理

// 掛載應用
app.mount('#app');