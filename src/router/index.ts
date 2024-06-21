import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/'
  },
  {
    path: '/tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/homepage'
      },
      {
        path: '/homepage',
        name: "homepage",
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: '/guides',
        name: "guides",
        component: () => import('@/views/Guides.vue')
      },
      {
        path: '/settings',
        name: "settings",
        component: () => import('@/views/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
