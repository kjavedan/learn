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
      layout: SimpleLayout,
      requiresAuth: false,
      onlyGuestAllowed: false
    }
  },
  {
    path: '/login',
    component: LoginView,
    meta: {
      layout: AuthLayout,
      requiresAuth: false,
      onlyGuestAllowed: true
    }
  },
  {
    path: '/profile',
    component: ProfileView,
    meta: {
      layout: MainLayout,
      requiresAuth: true,
      onlyGuestAllowed: false
    }
  },
  {
    path: '/component',
    component: ComponentView,
    meta: {
      layout: SimpleLayout,
      requiresAuth: false,
      onlyGuestAllowed: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

const isAuthenticated = false

// @ts-expect-error from is unused
router.beforeEach((to, from, next) => {
  const { requiresAuth, onlyGuestAllowed } = to.meta

  if (!isAuthenticated && requiresAuth) next('/login')
  else if (isAuthenticated && onlyGuestAllowed) next('/guide')
  else next()
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
