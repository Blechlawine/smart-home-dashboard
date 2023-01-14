<template>
    <NuxtLayout name="dashboard">
        <DeviceCard v-for="item in content" :id="item.device" :key="item.device" />
    </NuxtLayout>
</template>
<script setup lang="ts">
const { response, pending, refresh } = await useScreen("dashboard");

const content = computed(() => response.value?.data?.content);
</script>
<style>
@import "@/assets/icons.css";
</style>
