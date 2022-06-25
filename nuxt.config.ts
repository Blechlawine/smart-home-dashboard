import { defineNuxtConfig } from "nuxt";
import path from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
    runtimeConfig: {
        deviceConfigPath: path.join(__dirname, "/devices"),
    },
    colorMode: {
        preference: "night",
        dataValue: "theme",
    },
});
