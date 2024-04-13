<template>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <slot></slot>
    </h5>
</template>

<script setup>
defineProps({
    children: {
        required: true,
    },
})
</script>