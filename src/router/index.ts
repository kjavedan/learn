import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import GuideView from '@/views/Guide/GuideView.vue'

const routes = [
  {
    path: '/guide',
    component: GuideView
  },
  {
    path: '/component',
    component: () => import('@/views/Component/ComponentView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
