<template>
    <NuxtLayout name="dashboard">
        <div class="grid gap-4">
            <DeviceCard/>
        </div>
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
