import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SoundBoard from "@/views/SoundBoard.vue";
import LocatieCheck from "@/views/LocatieCheck.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/soundboard',
      name: 'SoundBoard',
      component: SoundBoard
    },
    {
      path: '/locatiecheck',
      name: 'LocatieCheck',
      component: LocatieCheck
    }
  ]
})

export default router
