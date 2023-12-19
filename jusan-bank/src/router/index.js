import { createRouter, createWebHistory } from 'vue-router'
import homePage from "@/views/HomePage/HomePage.vue";
import myBankPage from "@/views/MyBankPage/MyBankPage.vue";
import paymentsPage from "@/views/PaymentsPage/PaymentsPage.vue";
import profilePage from "@/views/ProfilePage/ProfilePage.vue";
import loginPage from "@/views/LoginPage/LoginPage.vue";
import registerPage from "@/views/RegisterPage/RegisterPage.vue";

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
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/register',
      name: 'register',
      component: registerPage
    },
  ]
})

export default router
