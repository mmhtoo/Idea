import type { RouteRecordRaw } from 'vue-router'

const dashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard/quizz/new',
    name: 'NewQuizz',
    component: () => import('@/views/dashboard/create-quizz/CreateQuizzView.vue')
  }
]

export default dashboardRoutes
