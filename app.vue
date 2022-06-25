<template>
    <NuxtLayout name="dashboard">
        <DeviceCard id="temperatureOutside"/>
        <DeviceCard id="temperatureInside"/>
    </NuxtLayout>
</template>
<script setup lang="ts">
</script>
<style>
@import "@/assets/icons.css";

.temperature-radial {
    transform: rotate(180deg);
}

.temperature-radial > * {
    transform: rotate(-180deg);
}
</style>
