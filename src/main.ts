import { createApp } from 'vue';
import { createPinia } from 'pinia'; // 引入 Pinia
import App from './App.vue';
import './style.css';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.mount('#app');