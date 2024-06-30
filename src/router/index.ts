import HomeView from '@/views/home/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { dashboardRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...dashboardRoutes
  ]
})

export default router
