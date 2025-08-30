import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/',
    redirect: '/Portfolio'   // هنا درنا التحويل ل Portfolio
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: () => import("@/App.vue"),
  },
  ],
})

export default router
