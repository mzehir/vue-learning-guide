<template>
    <div class="p-6 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <slot></slot>
    </div>

</template>

<script setup>
defineProps({
    children: {
        required: true,
    },
})
</script>