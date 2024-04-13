export const EXAMPLE_CODE = `// Text Interpolation Kullanımı
<template>
    <div>
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello, world!");
</script>
`
export const SUBJECT_LECTURE = {
  title: 'Text Interpolation nedir? Ne zaman kullanılır? Nasıl kullanılır?',
  content: `
  <div>
    <p>Text interpolation, türkçe manası olarak 'metin enterpolasyonu' anlamına gelir ve bir metin dizesi içinde değişkenlerin veya ifadelerin değerlerini yerleştirmek için kullanılan bir tekniktir. </p>
    <p>Vue.js'de text interpolation, vue bileşenlerinin içinde veri bağlamak için yaygın olarak kullanılan bir özelliktir.</p>
    <br/>
    <p>Vue bileşenlerinde, '{{ }}' süslü parantez içinde JavaScript ifadeleri kullanarak text interpolation yapabilirsiniz. Bu ifadeler, bileşenin veri kaynağından gelen değişkenler, hesaplanmış değerler veya yöntem çağrıları olabilir. Vue, bileşenin içeriğini güncellediğinde bu ifadeler otomatik olarak yeniden değerlendirilir ve güncellenir, böylece kullanıcı arayüzü dinamik olarak değişir.</p>
  </div>
  `,
  contentType: 'v-html'
}
