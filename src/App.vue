<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import Question from '@/components/Question.vue'
import Chat from '@/components/Chat.vue'
import Loading from '@/components/Loading.vue'
import { useApiStore } from "@/store/apiStore";
const apiStore = useApiStore();
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- 導覽列 | 設定列  -->
    <Navbar />
    <!-- 對話框 -->
    <Chat />
    <!-- 問題列 -->
    <Question />
    <!-- Loading 層 -->
    <Loading />
  </div>
</template>