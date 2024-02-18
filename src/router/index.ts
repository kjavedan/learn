import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

// Layouts
import { SimpleLayout, AuthLayout, MainLayout } from '@/layout'

// Components
const GuideView = () => import('@/views/Guide/GuideView.vue')
const LoginView = () => import('@/views/Login/LoginView.vue')
const ProfileView = () => import('@/views/Profile/ProfileView.vue')
const ComponentView = () => import('@/views/Component/ComponentView.vue')

const routes = [
  {
    path: '/guide',
    component: GuideView,
    meta: {
      layout: SimpleLayout
    }
  },
  {
    path: '/login',
    component: LoginView,
    meta: {
      layout: AuthLayout
    }
  },
  {
    path: '/profile',
    component: ProfileView,
    meta: {
      layout: MainLayout
    }
  },
  {
    path: '/component',
    component: ComponentView,
    meta: {
      layout: SimpleLayout
    }
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
