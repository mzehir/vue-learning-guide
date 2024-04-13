<template>
    <div>
        <CardComp>
            <CardTitle>{{ whatIsTextInterpolation.title }}</CardTitle>

            <CardContent v-if="whatIsTextInterpolation.contentType === 'v-html'"
                v-html="whatIsTextInterpolation.content"></CardContent>
        </CardComp>

        <PrimsEditor :initialCode="code" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PrimsEditor from '@/components/primsEditor/PrimsEditor.vue';
import CardComp from '@/components/card/CardComp.vue';
import CardTitle from '@/components/card/CardTitle.vue';
import CardContent from '@/components/card/CardContent.vue';

import { EXAMPLE_CODE, SUBJECT_LECTURE } from './rawHtml.js';

const whatIsTextInterpolation = ref(SUBJECT_LECTURE);
const code = ref(EXAMPLE_CODE)

</script>
