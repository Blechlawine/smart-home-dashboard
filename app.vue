<template>
    <NuxtLayout name="dashboard">
        <div class="grid gap-4">
            <Card>
                <template #title> Temperature 1 </template>
                <template #figure>
                    <div class="temperature-radial radial-progress text-primary" :style="temperatureStyles">
                        <p>{{ temperature }}</p>
                    </div>
                </template>
            </Card>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
const temperature = ref("");

onMounted(async () => {
    temperature.value = (await $fetch("/api/device/temperature1")).data[0];
});

const scaleTemp = (value: number) => {
    return (100 / 20) * (value - 10);
};

const temperatureStyles = computed(() => ({
    "--value": `${scaleTemp(parseFloat(temperature.value))}`,
}));
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
