import { defineNuxtConfig } from "nuxt";
import path from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],
    runtimeConfig: {
        deviceConfigPath: path.join(__dirname, "/devices"),
    },
});
