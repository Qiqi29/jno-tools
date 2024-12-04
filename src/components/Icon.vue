<script setup>
const props = defineProps({
    size: {
        type: String,
        default: "1.5em",
    },
    icon: {
        type: String,
        default: "",
    },
})

</script>

<template>
    <svg class="icon" :width="size" :height="size">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<style lang="scss" scoped>
.icon {
    fill: inherit;
}
</style>