<template>
    <Card>
        <template #title>
            {{ props.id }}
        </template>
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
const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const device = await useDevice(props.id);

const scaleTemp = (value: number) => {
    return (100 / 20) * (value - 10);
};

const temperatureStyles = computed(() => ({
    "--value": `${scaleTemp(parseFloat(device.response.value.data[0]))}`,
}));
</script>
<style>
.temperature-radial {
    transform: rotate(180deg);
}

.temperature-radial > * {
    transform: rotate(-180deg);
}
</style>
