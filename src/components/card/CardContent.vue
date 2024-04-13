<template>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <slot></slot>
    </p>
</template>

<script setup>
defineProps({
    children: {
        required: true,
    },
})
</script>