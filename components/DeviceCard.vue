<template>
    <Card>
        <template #title> Temperature 1 </template>
        <template #figure>
            <div class="temperature-radial radial-progress text-primary" :style="temperatureStyles">
                <p>{{ device.pending.value ? "..." : device.response.value.data[0] }}</p>
            </div>
        </template>
        <template #actions>
            <button class="btn btn-xs" @click="() => device.refresh()">
                <span class="material-icons">refresh</span>
            </button>
        </template>
    </Card>
</template>

<script setup lang="ts">
const device = await useDevice("temperature1");

const scaleTemp = (value: number) => {
    return (100 / 20) * (value - 10);
};

const temperatureStyles = computed(() => ({
    "--value": `${scaleTemp(parseFloat(device.response.value.data[0]))}`,
}));
</script>
