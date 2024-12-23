<script lang="ts" setup>
import { useApiStore } from "@/store/apiStore";
const apiStore = useApiStore();
</script>
<template>
    <div v-if="apiStore.loading" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div
            class="flex items-center justify-center w-16 h-16 border-4 border-t-transparent rounded-full animate-spin border-gradient">
        </div>
    </div>
</template>


<style scoped>
/* Tailwind 自定義邊框漸變效果 */
.border-gradient {
    border-image: linear-gradient(90deg, #1fb6ff, #7e5bef) 1;
}
</style>