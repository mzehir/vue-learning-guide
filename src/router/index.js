import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/dashboard/Dashboard.vue')
    },
    {
      path: '/about-vue',
      name: 'aboutVue',
      component: () => import('../views/aboutVue/AboutVueView.vue')
    },
    // vue-fundamentals
    {
      path: '/text-interpolation',
      name: 'textInterpolation',
      component: () => import('../views/vueFundamentals/textInterpolation/TextInterpolation.vue')
    },
    {
      path: '/raw-html',
      name: 'rawHtml',
      component: () => import('../views/vueFundamentals/rawHtml/RawHtml.vue')
    }
  ]
})

export default router
