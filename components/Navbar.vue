<template>
    <div class="navbar rounded-2xl">
        <div class="flex-none">
            <button class="btn btn-square btn-ghost">
                <span class="material-icons">menu</span>
            </button>
        </div>
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">Dashboard</a>
        </div>
        <div class="flex-none">
            <div class="dropdown">
                <select class="select w-full max-w-xs" v-model="colorMode.preference">
                    <option disabled selected>Theme</option>
                    <option v-for="theme of themes" :key="theme">{{ theme }}</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();
const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
];
</script>
