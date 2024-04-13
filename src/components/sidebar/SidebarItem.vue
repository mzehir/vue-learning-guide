<template>
    <template v-if="item.children.length < 1">
        <a :href="item.href" :class="[aElementClasses, depth && depth > 0 ? `pl-${depth * 5}` : '']">
            <span class="ms-3">{{ item.label }}</span>
        </a>
    </template>

    <template v-else>
        <button type="button" :class="[buttonElementClasses, depth && depth > 0 ? `pl-${depth * 5}` : '']"
            @click="detailButtonClick(item)">
            <span :class="buttonInSpanElementClasses">{{ item.label }}</span>
            <FaAngleUp v-if="item.showChildren" />
            <FaAngleDown v-else />
        </button>

        <SidebarList v-if="item.children.length > 0 && item.showChildren" :items="item.children"
            :detailButtonClick="detailButtonClick" :depth="depth + 1" />
    </template>
</template>

<script setup>
import SidebarList from './SidebarList.vue';
import { FaAngleDown, FaAngleUp } from "vue3-icons/fa6";

const aElementClasses = [
    'flex', 'items-center', 'p-2', 'text-gray-900',
    'rounded-lg', 'dark:text-white', 'hover:bg-gray-100', 'dark:hover:bg-gray-700', 'group'
].join(' ');

const buttonElementClasses = [
    'flex', 'items-center', 'w-full', 'p-2', 'text-base', 'text-gray-900',
    'transition', 'duration-75', 'rounded-lg', 'group', 'hover:bg-gray-100',
    'dark:text-white', 'dark:hover:bg-gray-700'
].join(' ');

const buttonInSpanElementClasses = [
    'flex-1', 'ms-3', 'text-left', 'rtl:text-right',
    'whitespace-nowrap'
].join(' ');

defineProps({
    depth: {
        type: Number,
        required: false,
        default: 0,
    },
    item: {
        type: Object,
        required: true
    },
    detailButtonClick: {
        type: Function,
        required: false
    }
})
</script>

<style scoped></style>