<template>
    <aside id="logo-sidebar" :class="asideElementClasses" aria-label="Sidebar">
        <div :class="asideInDivElementClasses">
            <SidebarList :items="sidebarItems" :detailButtonClick="detailButtonClick" />
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import SidebarList from './SidebarList.vue';

const asideElementClasses = [
    'fixed', 'top-0', 'left-0', 'z-40', 'w-64',
    'h-screen', 'pt-20', 'transition-transform', '-translate-x-full',
    'bg-white', 'border-r', 'border-gray-200', 'sm:translate-x-0',
    'dark:bg-gray-800', 'dark:border-gray-700',
].join(' ');

const asideInDivElementClasses = [
    'h-full', 'px-3', 'pb-4', 'overflow-y-auto',
    'bg-white', 'dark:bg-gray-800'
].join(' ');

const sidebarItems = ref([
    { key: 'dashboard', label: 'Gösterge Tablosu', children: [], href: '/' },
    { key: 'aboutVue', label: 'Vue Hakkında', children: [], href: '/about-vue' },
    {
        key: 'vueFundamentals',
        label: 'Vue Temel Bilgiler',
        children: [
            {
                key: 'textInterpolation',
                label: 'Metin Enterpolasyonu',
                children: [],
                href: '/text-interpolation'
            },
            {
                key: 'rawHtml',
                label: 'Ham HTML',
                children: [],
                href: '/raw-html'
            },
        ]
    },
]);

const detailButtonClick = (item) => {
    item.showChildren = !item.showChildren;
};
</script>

<style scoped></style>