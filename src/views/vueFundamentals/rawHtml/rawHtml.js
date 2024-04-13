export const EXAMPLE_CODE = `// Raw HTML Kullanımı
<template>
    <div>
        <p v-html="htmlContent"></p>
    </div>
</template>

<script setup>
import { ref } from "vue";

const htmlContent = ref("<strong>Merhaba dünya!</strong>");
</script>
`
export const SUBJECT_LECTURE = {
  title: 'Raw HTML nedir? Ne zaman kullanılır? Nasıl kullanılır?',
  content: `
  <div>
    <p>Raw HTML, türkçe manası olarak 'ham html' anlamına gelir ve bir web sayfasında doğrudan HTML kodu kullanarak içerik oluşturmayı ifade eder. Bu, HTML dosyasında direkt olarak HTML etiketleri kullanarak, başka bir dil veya araç kullanmadan içerik oluşturmayı anlatır.</p>
    <br/>
    <p>Vue.js'te "raw HTML" terimi, Vue bileşenlerinde HTML kodunu içine yerleştirirken kullanılır. Vue'da, genellikle veri bağlama (data binding) yöntemiyle bileşenler oluşturulur. Ancak bazı durumlarda, bir bileşenin içeriği dinamik olarak oluşturulduğunda veya dış kaynaklardan (örneğin, bir API'den) gelen HTML içeriğini görüntülemek istediğinizde "raw HTML" kullanılır.</p>
    <br/>
    <p>Vue.js'te "raw HTML" kullanımı, v-html direktifiyle sağlanır. Bu direktif, bileşen içeriğinin HTML kodunu dinamik olarak oluşturmak için kullanılır. Ancak, güvenlik nedenleriyle dikkatli kullanılmalıdır çünkü bu, potansiyel olarak XSS (Cross-Site Scripting) saldırılarına yol açabilir.</p>
  </div>
  `,
  contentType: 'v-html'
}
