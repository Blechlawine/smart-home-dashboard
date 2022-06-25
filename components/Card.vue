<template>
    <div class="card bg-base-100 w-max">
        <figure class="px-4 pt-4">
            <slot name="figure"></slot>
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                <slot name="title"></slot>
            </h2>
            <p>
                <slot name="text"></slot>
            </p>
            <div class="card-actions justify-end">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    width: {
        type: Number,
        default: 1,
    },
    height: {
        type: Number,
        default: 1,
    },
});
</script>
