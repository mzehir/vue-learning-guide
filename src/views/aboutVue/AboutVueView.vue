<template>
    <div>
        <CardComp v-for="item in aboutVueDescription" :key="item.title">
            <CardTitle>{{ item.title }}</CardTitle>

            <CardContent v-if="item.contentType === 'v-html'" v-html="item.content"></CardContent>
            <CardContent v-else>{{ item.content }}</CardContent>
        </CardComp>
    </div>

</template>

<script setup>
import { ref } from 'vue';

import CardComp from '@/components/card/CardComp.vue';
import CardTitle from '@/components/card/CardTitle.vue';
import CardContent from '@/components/card/CardContent.vue';

const aboutVueDescription = ref([
    {
        title: "Vue.js nedir?",
        content: `
        <div>
            <p>Vue.js, modern web uygulamaları geliştirmek için kullanılan açık kaynaklı bir JavaScript framework'üdür.</p>
            <p>Vue.js, kullanımı kolay ve esnek bir yapı sunar ve dinamik kullanıcı arayüzleri oluşturmak için tasarlanmıştır.</p>
        </div>
        `,
        contentType: "v-html"
    },

    {
        title: "JavaScript framework'ü ne demektir?",
        content: `
        <div>
            <p>JavaScript framework'ü, JavaScript dilini kullanarak web uygulamaları geliştirmek için kullanılan bir yazılım aracı veya kütüphanedir.</p>
            <br/>
            <p>JavaScript framework'leri, web uygulamalarının geliştirme sürecini hızlandırmak, kod tekrarını azaltmak, bakımı kolaylaştırmak ve daha iyi performans ve güvenlik sağlamak gibi çeşitli avantajlar sunarlar. </p>
            <p>	Bu framework'ler, genellikle veri bağlama, bileşen tabanlı mimari, durum yönetimi, yönlendirme, etkinlik işleme ve diğer yaygın web uygulaması gereksinimlerini ele almak için önceden tanımlanmış özellikler ve araçlar içerir.</p>
            <br/>
            <p>Bazı popüler JavaScript framework'leri arasında Vue.js, React.js, AngularJS, Angular ve Ember.js gibi isimler bulunur.</p>
            <p>Bu framework'ler, farklı yaklaşımlar ve özellikler sunarlar ve geliştiricilerin tercihlerine ve ihtiyaçlarına göre seçim yapmalarını sağlarlar.</p>
        </div>
        `,
        contentType: "v-html"
    },

    {
        title: "Vue.js sürümleri nelerdir?",
        content: `
        <div>
            <p><strong>a- Vue.js 2.x:</strong></p>
            <p>Uzun bir süre ana sürüm olan Vue 2, oldukça popülerdi ve birçok projede kullanıldı. Bu sürüm, Vue ekosisteminin stabil ve olgun bir versiyonudur.</p>
            <br/>
            <p><strong>b- Vue.js 3.x:</strong></p>
            <p>Vue 3, önemli bir güncellemedir ve performans, hız ve geliştirici deneyimi açısından birçok iyileştirme getirir.</p>
            <p>Bu sürümde, Reactive Programming ve Composition API gibi yeni özellikler bulunmaktadır.</p>
        </div>
        `,
        contentType: "v-html"
    },

    {
        title: "Vue.js Reactive Programming ne demektir?",
        content: `
        <div>
            <p>Reaktif programlama (Reactive Programming), uygulamaların veri akışlarını ve değişikliklerini ele almak için kullanılan bir programlama paradigmasıdır.</p>
            <p>Vue.js gibi bazı modern JavaScript framework'leri, reaktif programlama kavramlarını benimser ve uygular.</p>
            <br/>
            <p>Vue.js'de reaktif programlama, Vue tarafından sağlanan reaktif veri bağlama sistemiyle ilişkilidir. Bu sistem, Vue bileşenlerindeki verileri HTML ile bağlayarak, veri değiştiğinde otomatik olarak kullanıcı arayüzünü günceller.</p>
            <br/>
            <p>Vue.js'deki reaktif programlama, uygulamaların daha etkili, verimli ve kolay bakım yapılabilir olmasını sağlar.</p>
            <p>Bu, veri akışlarını daha iyi yönetmeyi, uygulama durumunu daha doğru bir şekilde izlemeyi ve uygulamanın daha iyi performans göstermesini sağlar.</p>
        </div>
        `,
        contentType: "v-html"
    },

    {
        title: "Vue.js'de Options API vs Composition API nedir? Arasındaki farklar nelerdir? Hangisi ne zaman tercih edilmelidir?",
        content: `
        <div>
            <p>Vue.js'de, bileşenlerin içinde veri ve işlevselliği organize etmek için iki farklı API bulunmaktadır: Options API ve Composition API.</p>
            <p>İşlevsel açıdan, her iki API de Vue bileşenlerinin nasıl yapılandırılacağını ve yönetileceğini tanımlar, ancak yaklaşımları farklıdır.</p>
            <br/>
            <p><strong>Options API:</strong></p>
            <p>Vue.js'in klasik ve önceden tanımlı bir bileşen yapılandırma yaklaşımıdır. Bu API, data, methods, computed, watch gibi özellikleri kullanarak bileşenin veri, yöntemler ve izleme işlevselliğini tanımlamanıza olanak tanır.</p>
            <p>Bileşenler genellikle bir nesne içinde bu özelliklerle yapılandırılır. Options API, Vue 2.x sürümlerinde ana bileşen yapılandırma yöntemiydi ve hala kullanılmaktadır.</p>
            <br/>
            <p><strong>Composition API:</strong></p>
            <p>Vue.js 3.x sürümüyle birlikte tanıtılan yeni bir API'dir. Bu API, bileşenlerin içinde mantıksal parçaları işlevsel gruplar halinde düzenlemenize olanak tanır.</p>
            <p>Bileşenlerdeki veri ve işlevselliği, yeniden kullanılabilir ve organize edilebilir parçalara ayırmanıza olanak tanır. Composition API, Vue.js 3.x ile birlikte gelen yeni özelliklerden biridir ve Vue 2.x'e göre daha esnek bir yapı sunar.</p>
            <br/>
            <p><strong>Karşılaştırma:</strong></p>
            <p>- Yapılandırma Yaklaşımı: Options API, belirli bir sıraya göre bileşen özelliklerini tanımlamanıza dayanırken, Composition API, mantıksal parçaları işlevsel gruplar halinde düzenlemenize olanak tanır.</p>
            <p>- Daha Büyük Projeler İçin Uygunluk: Composition API, büyük ve karmaşık projelerde bileşenleri daha iyi organize etmeye ve yönetmeye olanak tanırken, Options API, küçük ve orta ölçekli projelerde daha yaygın olarak kullanılabilir.</p>
            <p>- Daha İyi Okunabilirlik ve Bakım Kolaylığı: Composition API, daha modüler ve yeniden kullanılabilir bir yapı sunar, bu da bileşenlerin daha iyi okunabilir ve bakımı daha kolay hale gelir.</p>
            <br/>
            <p><strong>Hangisi Ne Zaman Tercih Edilmelidir:</strong></p>
            <p>- Options API Tercih Edilmelidir: Küçük veya basit bir proje geliştiriyorsanız veya Vue.js 2.x sürümünü kullanıyorsanız, Options API tercih edilebilir.</p>
            <p>- Composition API Tercih Edilmelidir: Büyük veya karmaşık bir proje geliştiriyorsanız, bileşenleri daha modüler hale getirmek ve yeniden kullanılabilir parçalar oluşturmak istiyorsanız veya Vue.js 3.x sürümünü kullanıyorsanız, Composition API tercih edilebilir.</p>
        </div>
        `,
        contentType: "v-html"
    },
]);
</script>

<style></style>