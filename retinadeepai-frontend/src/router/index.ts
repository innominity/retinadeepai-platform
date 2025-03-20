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
      component: () => import('../views/Auth/SignupView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/LoginView.vue'),
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/Auth/ResetPasswordView.vue'),
    },
    {
      path: '/pages/main',
      name: 'main',
      component: () => import('../views/Pages/MainPageView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const pathSafe: (string | undefined | number)[] = ['login', 'home', 'signup'];
  if (pathSafe.find(to.name)!=-1) {
    next()
    return
  }
  console.log(useUserStore().user.isAuthenticated)
  if (!useUserStore().user.isAuthenticated) next({name:'login'})
    else next()
});

export default router