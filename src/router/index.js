import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/login/Index.vue')
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import(/* webpackChunkName: "payments" */ '../views/dashboard/payments'),
    children: [
      {
        path: '',
        name: 'Payment List',
        component: () => import(/* webpackChunkName: "paymentlist" */ '../views/dashboard/payments/Index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
