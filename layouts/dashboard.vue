<template>
    <div class="appGrid grid gap-4 p-4">
        <Navbar />
        <div class="dashboardGrid grid gap-4">
            <slot />
        </div>
    </div>
</template>
<style scoped>
.appGrid {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
}

.dashboardGrid {
    grid-auto-flow: column;
    grid-auto-columns: min-content;
}
</style>
