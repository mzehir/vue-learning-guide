<template>
    <div>
        <PrismEditor class="my-editor" v-model="code" :highlight="highlighter" :line-numbers="true" :readonly="true">
        </PrismEditor>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import "prismjs/themes/prism-tomorrow.css";

const props = defineProps({
    initialCode: {
        type: String,
        default: 'console.log("Merhaba Arkadaşlar")'
    }
});

const code = ref(props.initialCode || 'console.log("No code found to display")');

const highlighter = (code) => {
    return highlight(code, languages.js);
};

</script>

<style lang="scss">
.my-editor {
    background: #2d2d2d;
    color: #ccc;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
}

.prism-editor__textarea:focus {
    outline: none;
}
</style>