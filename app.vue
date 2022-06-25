<template>
    <div>
        {{temperature}}
    </div>
</template>
<script setup lang="ts">
const temperature = ref("");

onMounted(async () => {
    temperature.value = await $fetch("/api/device/temperature1");
});
</script>
