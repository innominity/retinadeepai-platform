import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/auth/SignupView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/auth/ResetPasswordView.vue'),
    },
    {
      path: '/pages/main',
      name: 'main',
      component: () => import('../views/pages/MainPageView.vue'),
    },
    {
      path: '/pages/researches',
      name: 'research',
      component: () => import('../views/pages/ResearchPageView.vue'),
    },
    {
      path: '/pages/researches/new',
      name: 'research-new',
      component: () => import('../views/pages/MakeResearchPageView.vue'),
    },
    {
      path: '/pages/services',
      name: 'services',
      component: () => import('../views/pages/ServicesPageView.vue'),
    },
    {
      path: '/pages/handbook',
      name: 'handbook',
      component: () => import('../views/pages/HandbookPageView.vue'),
    },
    {
      path: '/pages/reports',
      name: 'reports',
      component: () => import('../views/pages/ReportsPageView.vue'),
    },
    {
      path: '/pages/settings',
      name: 'settings',
      component: () => import('../views/pages/SettingsPageView.vue'),
    },
    {
      path: '/pages/profile',
      name: 'profile',
      component: () => import('../views/pages/ProfilePageView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const pathSafe: (string)[] = ['login', 'home', 'signup']
  if (pathSafe.indexOf(to.name)!=-1) {
    next()
  }
  else if (!userStore.user.isAuthenticated) next({name:'login'})
    else next()
});

export default router