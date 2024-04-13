<script setup>
import Navbar from './components/navbar/Navbar.vue'
import Sidebar from './components/sidebar/Sidebar.vue'
</script>

<template>
    <div>
        <Navbar />
        <Sidebar />

        <div class="p-4 sm:ml-64 mt-14">
            <RouterView />
        </div>

    </div>

</template>

<style scoped></style>
