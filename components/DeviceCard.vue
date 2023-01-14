<template>
    <Card>
        <template #title>
            {{ props.id }}
        </template>
        <template #figure>
            <div
                v-if="response?.metadata.dataType === 'number'"
                class="temperature-radial radial-progress text-primary"
                :style="numberStyles"
            >
                <p>{{ device.pending.value ? "..." : response?.data?.[0] }}</p>
            </div>
            <div v-else-if="response?.metadata.dataType === 'string'">
                <p>{{ device.pending.value ? "..." : response?.data?.[0] }}</p>
            </div>
            <div v-else-if="response?.metadata.dataType === 'boolean'">
                <p>{{ device.pending.value ? "..." : response?.data?.[0] }}</p>
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

const response = computed(() => device.response.value);
const scaledNumber = computed(() => {
    if (response.value?.metadata.dataType === "number") {
        const input = parseFloat(response.value?.data?.[0] ?? "");
        const min = response.value?.metadata.min;
        const max = response.value?.metadata.max;
        return (
            ((input - min) / (max - min)) *
            100
        );
    }
});
const numberStyles = computed(() => ({
    "--value": `${scaledNumber.value}`,
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
