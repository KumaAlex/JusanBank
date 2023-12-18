import { createRouter, createWebHistory } from 'vue-router'
import homePage from "@/views/HomePage/HomePage.vue";
import myBankPage from "@/views/MyBankPage/MyBankPage.vue";
import paymentsPage from "@/views/PaymentsPage/PaymentsPage.vue";
import profilePage from "@/views/ProfilePage/ProfilePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/my_bank',
      name: 'my_bank',
      component: myBankPage
    },
    {
      path: '/payments',
      name: 'payments',
      component: paymentsPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: profilePage
    },
  ]
})

export default router
