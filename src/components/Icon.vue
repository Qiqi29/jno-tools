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
    color: {
        type: String,
        default: "currentColor",
    }
})

</script>

<template>
    <span class="icon">
        <i :style="{ color: color, fontSize:size }">
            <svg><use :xlink:href="`#icon-${icon}`"></use></svg>
        </i>
    </span>
</template>

<style lang="scss" scoped>
.icon {
    display: inline-flex;
    vertical-align: middle;
    flex-shrink: 0;
    i {
        display: inline-flex;
        width: 1em;
        height: 1em;
        fill: currentColor;
        svg {
            width: inherit;
            height: inherit;
            fill: inherit;
        }
    }
}
</style>