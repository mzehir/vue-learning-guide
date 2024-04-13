<template>
    <ul class="space-y-2 font-medium">
        <li v-for="item in items" :key="item.key">
            <SidebarItem :item="item" :detailButtonClick="detailButtonClick" :depth="depth" />
        </li>
    </ul>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue';

defineProps({
    depth: {
        type: Number,
        required: false,
        default: 0,
    },
    items: {
        type: Array,
        required: true
    },
    detailButtonClick: {
        type: Function,
        required: false
    }
})
</script>

<style scoped></style>
