import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const constRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  },
  {
    path: '/404',
    component: () =>
      import(/* webpackChunkName: "404" */ '../views/error-page/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constRoutes
})

export default router
